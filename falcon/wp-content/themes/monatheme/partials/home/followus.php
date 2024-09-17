<?php
/**
 * Section name: FOLLOW US
 * Description: 
 * Author: Hiu Hiu
 * Order: 
 */
$mon_home_agency = get_field('mon_home_agency');
if ( is_array( $mon_home_agency ) && !empty( $mon_home_agency )) {
?>
<section class="home_store">
	<!-- đổ thêm chỗ này nha a -->
	<div class="home_store--bg">
	
        <img src="<?php echo get_template_directory_uri(  ) ."/template/assets/images/ar.jpg" ?>" alt="">
    </div>
	<!--  -->
	<div class="container">
		<div class="home_store--wrap">
			<div class="home_store--content">
				<div class="home_store--num">
					<p class="num"><?php echo $mon_home_agency['number']; ?></p>
					<p class="plus">+</p>
				</div>
				<h2 class="title-sm3 fw-7 cl-white t-up t-center">
					<?php echo $mon_home_agency['content']; ?>
				</h2>
			</div>
		</div>
	</div>
</section>
<?php } 

$mon_home_follow_us = get_field('mon_home_follow_us');
if ( is_array( $mon_home_follow_us ) && !empty( $mon_home_follow_us )) { ?>

<section class="home_follow">
	<div class="container">
		<div class="home_follow--wrap d-wrap">
			<div class="home_follow--lf d-item" data-aos="fade-right">
				<div class="home_follow--lf-wrap">
					<h2 class="title-md cl-text fl-sec t-up fw-9">
						<?php echo $mon_home_follow_us['title']; ?>
					</h2>
					<ul class="social-mb-list">
						<?php foreach ($mon_home_follow_us['follow_us_list'] as $item) { 
							$link = $item['link']; ?>
						<li class="social-mb-item">
							<a href="<?php echo $link['url']; ?>" class="social-mb-link" target="<?php echo $link['target']; ?>">
								<?php echo wp_get_attachment_image($item['icon'], 'full'); ?>
							</a>
						</li>
						<?php } ?>
					</ul>
				</div>
			</div>
			<div class="home_follow--rt d-item">
				<div class="home_follow--rt-wrap">
					<ul class="home_follow--list">
						<?php foreach ($mon_home_follow_us['follow_us_list'] as $item) { 
							$link = $item['link']; ?>
						<li class="home_follow--item" data-aos="zoom-in">
							<a href="<?php echo $link['url']; ?>" class="home_follow--link" target="<?php echo $link['target']; ?>">
								<span class="home_follow--img">
									<?php echo wp_get_attachment_image($item['image'], 'full'); ?>
								</span>
								<span class="home_follow--ic">
									<?php echo wp_get_attachment_image($item['icon'], 'full'); ?>
								</span>
							</a>
						</li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</div>

</section>
<?php } ?>