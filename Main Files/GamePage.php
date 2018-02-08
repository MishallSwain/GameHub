<html>
<head>
    <title>Game Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"></script>
	<script src="gamepage.js"></script>
	<style>
		body{
			background-image: url("dota.jpg");
		}
		.video{
			position: absolute;
			top: 35%;
			left: 32%;
		}
		#full-loader
		{
			position: absolute;
			width: 100vw;
			height: 100vh;
			background-color: black;
			top: 0;
			left:0;
			z-index: 9001;
		}
		#loading_img{
    min-height:100%;
    min-width:100%;
    height:auto;
    width:auto;
    position:absolute;
    top:-100%; bottom:-100%;
    left:-100%; right:-100%;
    margin:auto;
}
	</style>

</head>
<body>
	
    <?php include('header.php'); ?>
	<!--<div id="full-loader">
    <img id="loading_img" src="loading.gif">
	</div>-->
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog modal-lg">
		    <div class="modal-content">
			<div class="modal-header">
			  <button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">
				<video controls="controls" id="vid-play">
				<source src="http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256676540\/movie480.webm?t=1481922273" type="video/webm" />
				</video>
			</div>
			<div class="modal-footer">
			  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		    </div>
		</div>
	</div>

	<div class="main_content">
    <div id="temp" class="container">
        <div class="row">
        <div class="col-md-8 slide">
            <div class="col-md-12 headImage">
            </div>
            <div class="col-md-12 slider">
            <div class="well">
                <div class="carousel slide" data-ride="carousel" data-type="multi" id="myCarousel">
                  <!-- Carousel items -->
                  <div class="carousel-inner">
							<div class="item active">
                              <div class="col-xs-3"><div class="vid1 images"><button class="bvid1 video" type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">
								<span class="glyphicon glyphicon-play"></span> Play
							  </button></div>
                              </div>
							  <div class="col-xs-3"><div class="vid2 images"><button class="bvid2 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							  <div class="col-xs-3"><a href="#"><div class="gimg1 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#"><div class="gimg2 images"></div></a>
							  </div>
							</div>
							<div class="item">
							  <div class="col-xs-3"><div class="vid2 images"><button class="bvid2 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
                              <div class="col-xs-3"><a href="#x"><div class="gimg1 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#x"><div class="gimg2 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#x"><div class="gimg3 images"></div></a>
                              </div>
							</div>
							<div class="item">
                              <div class="col-xs-3"><a href="#x"><div class="gimg1 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#x"><div class="gimg2 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#x"><div class="gimg3 images"></div></a>
                              </div>
							  <div class="col-xs-3"><a href="#x"><div class="gimg4 images"></div></a>
							  </div>
							</div>
							<div class="item">  
                              <div class="col-xs-3  "><a href="#x"><div class="gimg2 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg3 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg4 images"></div></a>
							  </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg5 images"></div></a>
                              </div>
							</div>
							<div class="item">
                              <div class="col-xs-3  "><a href="#x"><div class="gimg3 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg4 images"></div></a>
							  </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg5 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg6 images"></div></a>
                              </div>
							</div>
							<div class="item">
							  <div class="col-xs-3  "><a href="#x"><div class="gimg4 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg5 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg6 images"></div></a>
                              </div>
							  <div class="col-xs-3"><div class="vid1 images"><button class="bvid1 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							</div>
							<div class="item">
                              <div class="col-xs-3  "><a href="#x"><div class="gimg5 images"></div></a>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg6 images"></div></a>
                              </div>
							  <div class="col-xs-3"><div class="vid1 images"><button class="bvid1 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							  <div class="col-xs-3"><div class="vid2 images"><button class="bvid2 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							</div>
							<div class="item">
                              <div class="col-xs-3  "><a href="#x"><div class="gimg6 images"></div></a>
                              </div>
							  <div class="col-xs-3"><div class="vid1 images"><button class="bvid1 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							  <div class="col-xs-3"><div class="vid2 images"><button class="bvid2 video" type="button" class="btn btn-default btn-sm"data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-play"></span> Play</button></div>
                              </div>
							  <div class="col-xs-3  "><a href="#x"><div class="gimg1 images"></div></a>
                              </div>
							</div>
                      
                  </div> 
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
              </div>
              <!--/myCarousel-->
            </div>
            <!--/well-->
            </div>
        </div>

        <div class="col-md-4 describe">
            <div class="pad-bg">
            <h2 id="headtitle"></h2>
			<h3 id="price_overview" class="tag-header"></h3>
            <div class="rev">
            <div class="rev-row">
                <div id="mrp1" class="rev-title">MRP</div>
                <div id="mrp" class="rev-desc"></div>
            </div>
            <div class="rev-row">
                <div id="current_price1" class="rev-title">Current Price</div>
                <div id="current_price" class="rev-desc"></div>
            </div>
			 <div class="rev-row">
                <div id="discount1" class="rev-title">Discount percent</div>
                <div id="discount" class="rev-desc"></div>
            </div>
			<div id="buy" class="review-header"><img src="http://www.freeiconspng.com/uploads/steam-logo-icon-7.png" alt="Buy From Steam" width="50" height="50"></div>
            </div>
            <div class="container-fluid tags">
                <h3 class="tag-header">Tags</h3>
				<div id="tagss"></div>
            </div>
            </div>
        </div>
      </div><!--row-->


      <div class="row about-data">
        <div class="col-md-8 about">
          <div class="pad-bg">  
          <h3  class="about-header">About this game</h3>
          <p id="detailed_description"></p>
           <h3 class="about-header">System Requirements</h3>
		   
		   <ul class="nav nav-tabs" id="tab">
			<li class="active"><a data-toggle="tab" href="#windows">Windows</a></li>
			<li><a data-toggle="tab" href="#mac">Mac OS X</a></li>
			<li><a data-toggle="tab" href="#linux">SteamOS + Linux</a></li>
		   </ul>

		<div class="tab-content">
		<div id="windows" class="tab-pane fade in active">
		
		</div>
		<div id="mac" class="tab-pane fade"><ul>
         
		</div>
		<div id="linux" class="tab-pane fade">
		  
		</div>
		</div>
          </div>
        </div>
        <div class="col-md-4 statistics">
            <div class="pad-bg">
            <h3 class="statistics-header">Stats</h3>
            <div class="stat">
            <div class="stat-row">
                <div class="stat-title">Title</div>
                <div id="game_title" class="stat-desc">Dota 2</div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Genere</div>
                <div id="genre" class="stat-desc"></div>
				<div id="genre2" class="stat-desc"></div>
				<div id="genre3" class="stat-desc"></div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Developer</div>
                <div id="game_developers" class="stat-desc"></div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Publisher</div>
                <div id="game_publishers" class="stat-desc"></div>
            </div>
            <div class="stat-row">
                <div class="stat-title">Release Date</div>
                <div id="release_date" class="stat-desc"></div>
            </div>
			<div class="stat-row">
                <div class="stat-title">Players Playing</div>
                <div id="playing" class="stat-desc"></div>
            </div>
			<div class="stat-row">
                <div class="stat-title">Supported Languages</div>
                <div id="supported_languages" class="stat-desc"></div>
            </div>
            </div>
            </div>
        </div><!--statistics-->
      </div><!--about-data-->


      <div class="row news">   
      <div class="col-md-8 news-main">
          <div class="pad-bg">
          <h3 class="news-header">News</h3>
          <div class="news-1">
            <div id="first_news_title" class="news-title">News 1</div>
			<input type="checkbox" class="read-more-state" id="post-1" />
			<p class="read-more-wrap"><span class="read-more-target" id="first_news"></span></p>
			<label for="post-1" class="read-more-trigger"></label>
          </div>
          <div class="news-2">
            <div id="second_news_title" class="news-title">News 2</div>
			<input type="checkbox" class="read-more-state" id="post-2" />
			<p class="read-more-wrap"><span class="read-more-target" id="second_news"></span></p>
			<label for="post-2" class="read-more-trigger"></label>
          </div>
          <div class="news-3">
            <div id="third_news_title" class="news-title">News 3</div>
			<input type="checkbox" class="read-more-state" id="post-3" />
			<p class="read-more-wrap"><span class="read-more-target" id="third_news"></span></p>
			<label for="post-3" class="read-more-trigger"></label>
          </div> 
		  </div>
      </div>
	  <div class="col-md-4 review-meta">
          <div class="pad-bg">
            <h3 class="review-header"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2000px-Metacritic.svg.png" alt="Meta Review" width="35" height="35">Metacritic</h3>
            <p id="meta_score" class="mscore"></p>
			<div id="meta_review"></div>
          </div>
      </div>
      </div>

    </div><!--container-->
    </div><!--content-->
  
<?php include('footer.php');?>
</body>
</html>