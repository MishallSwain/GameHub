<html>
<head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<style>
		body{
			background-image: url("images/steam.jpg");
		}
	</style>
</head>
<body>
    <?php include('header.php'); ?>

    <div class="container">
    <div class="pad-bg">
    <br>
    <h2 class="header">Top Games</h2>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active animate"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner animate" role="listbox">
            <div class="item active">
                <a href="./GamePage.php?id=570"><img src="images/top/img1.jpg" alt="Dota 2" width="460" height="345"></a>
            </div>
            <div class="item">
               <a href="./GamePage.php?id=730"> <img src="images/top/img2.jpg" alt="Counter Strike" width="460" height="345"></a>
            </div>
            <div class="item">
                <a href="./GamePage.php?id=391220"><img src="images/top/img3.jpg" alt="Rise of the Tomb Raider" width="460" height="345"></a>
            </div>
            <div class="item">
                <a href="./GamePage.php?id=292030"><img src="images/top/img4.jpg" alt="The Witcher Wild Hunt" width="460" height="345"></a>
            </div>
            <div class="item">
               <a href="./GamePage.php?id=271590"> <img src="images/top/img5.jpg" alt="Grand Theft Auto 5" width="460" height="345"></a>
            </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    </div>
    </div>

    <div class="container">
    <div class="pad-bg">
    <br>
    <h2 class="header">Popular Games</h2>
    <div id="myCarouse2" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarouse2" data-slide-to="0" class="active animate"></li>
            <li data-target="#myCarouse2" data-slide-to="1"></li>
            <li data-target="#myCarouse2" data-slide-to="2"></li>
            <li data-target="#myCarouse2" data-slide-to="3"></li>
            <li data-target="#myCarouse2" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner animate" role="listbox">
            <div class="item active">
                <a href="./GamePage.php?id=403640"><img src="images/popular/img6.jpg" alt="Dishonered 2" width="460" height="345"></a>
            </div>
            <div class="item">
                 <a href="./GamePage.php?id=359550"><img src="images/popular/img7.jpg" alt="Rainbow Six Seige" width="460" height="345"></a>
            </div>
            <div class="item">
                <a href="./GamePage.php?id=447040"> <img src="images/popular/img8.jpg" alt="Watch Dogs 2" width="460" height="345"></a>
            </div>
            <div class="item">
                <a href="./GamePage.php?id=460930"><img src="images/popular/img9.jpg" alt="Ghost Reacon Wild Lands" width="460" height="345"></a>
            </div>
            <div class="item">
               <a href="./GamePage.php?id=271590"><img src="images/popular/img5.jpg" alt="Grand Theft Auto 5" width="460" height="345"></a>
            </div>
        </div>
        <a class="left carousel-control" href="#myCarouse2" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarouse2" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    </div>
    </div>

    <div class="container">
    <div class="pad-bg">
    <br>
    <h2 class="header">Special Offers</h2>
  <div class="row">
    <div class="col-md-12">
      <div class="carousel slide multi-item-carousel" id="theCarousel">
        <div class="carousel-inner">
          <div class="item active">
            <div class="col-xs-4"><a href="./GamePage.php?id=264710"><img src="images/offer/img10.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>50%off</h4></div>
            </div>
            <div class="col-xs-4"><a href="./GamePage.php?id=433850"><img src="images/offer/img11.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>40%off</h4></div>
            </div>
            <div class="col-xs-4"><a href="./GamePage.php?id=107410"><img src="images/offer/img12.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>50%off</h4></div>
            </div>
          </div>
          <div class="item">
            <div class="col-xs-4"><a href="./GamePage.php?id=206420"><img src="images/offer/img13.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>75%off</h4></div>
            </div>
            <div class="col-xs-4"><a href="./GamePage.php?id=244210"><img src="images/offer/img14.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>50%off</h4></div>
            </div>
            <div class="col-xs-4"><a href="./GamePage.php?id=435530"><img src="images/offer/img15.jpg" class="img-responsive" ></a>
                <div class="carousel-caption"><h4>67%off</h4></div>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
        <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
      </div>
    </div>
  </div>
  </div>
</div>

<?php include('footer.php');?>
</body>
</html>