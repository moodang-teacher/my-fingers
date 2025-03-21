const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// 제외할 폴더 목록
const excludeFolders = [
  "node_modules",
  "data",
  // 여기에 제외할 폴더 이름을 추가
];

// 자동으로 폴더 목록을 읽어오는 함수
const getFolders = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    const filePath = path.join(dir, file);
    return (
      fs.statSync(filePath).isDirectory() && !excludeFolders.includes(file)
    );
  });
};

// 읽고자 하는 폴더 목록 자동 생성
const folders = getFolders(__dirname);

// JSON 파일 생성
app.get("/generate-json", (req, res) => {
  const allFiles = {};

  // 폴더를 순차적으로 읽기 위한 Promise 체인
  const readFolder = (index) => {
    if (index >= folders.length) {
      // 모든 폴더를 읽은 후 JSON 파일로 저장
      fs.writeFile(
        path.join(__dirname, "data", "files.json"),
        JSON.stringify(allFiles, null, 2),
        (err) => {
          if (err) {
            console.error("JSON 파일 생성 중 오류 발생:", err);
            return res.status(500).send("JSON 파일 생성 중 오류 발생");
          }
          res.send("JSON 파일이 성공적으로 생성되었습니다.");
        }
      );
      return;
    }

    const folder = folders[index];
    const directoryPath = path.join(__dirname, folder);
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error(`폴더 ${folder}를 읽는 중 오류 발생:`, err);
        allFiles[folder] = "오류 발생";
      } else {
        allFiles[folder] = files;
      }
      // 다음 폴더를 읽기 위해 재귀 호출
      readFolder(index + 1);
    });
  };

  // 첫 번째 폴더부터 읽기 시작
  readFolder(0);
});

// 정적 파일 제공
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
