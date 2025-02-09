$(function() {

            var $cloud = $('.cloud1');
            var $cloud2 = $('.cloud2');
            var $window = $(window)
            var x = 0;
            var y = 0;

            var mx = 0;
            var my = 0;
            var speed = 0.009;

            $window.on('mousemove' , function(e) {
                x = e.pageX - $window.width() /2;
                y = e.pageY - $window.height() /2;

                console.log(x ,y)

            })

            movingObj()

            function movingObj() {
                mx += (x - mx) * speed
                my += (y - my) * speed

                $cloud.css({
                    transform: `translate(${mx * 0.1}px, ${my * 0.1}px)`
                });
                $cloud2.css({
                    transform: `translate(${-mx * 0.1}px, ${-my * 0.1}px)`
                });
               
                requestAnimationFrame(movingObj);

            }

})