<?php
/**
 * Section name: DANH MỤC SẢN PHẨM
 * Description: 
 * Author: Monamedia
 * Order: 
 */
  $list_pro_cat = get_field('mon_home_product_cat_outstanding');
  // if ( is_array( $list_pro_cat ) && !empty( $list_pro_cat )) {
    if ($list_pro_cat) {
?>
<section class="home_dm item-ani free-slide">
	<div class="container">
		<div class="home_dm--wrap" >
			<h2 class="title-sm3 cl-white fl-sec t-up fw-9">
				<?php echo __('DANH MỤC SẢN PHẨM', 'monamedia'); ?>
			</h2>
			<div class="home_dm--list d-wrap" data-aos="zoom-out">
				<div class="swiper mySwiper --center --loop">
					<div class="swiper-wrapper">
						<?php foreach ($list_pro_cat as $cat) {
							$term = is_object( $cat ) ? $cat : get_term( $cat );

							// Kiểm tra xem $term có phải là một đối tượng WP_Term
							if( $term instanceof WP_Term ){
									$term_link = get_term_link( $term );
									$term_name = $term->name;
									$term_id = $term->term_id;
									// $backgroud_category = get_field('backgroud_category', $term);
									$backgroud_category = get_term_meta($term_id, 'thumbnail_id', true);
						?>
						<div class="swiper-slide d-item">
							<div class="home_dm--item">
								<a class="home_dm--link" href="<?php echo $term_link; ?>">
									<span class="home_dm--img">
										<?php echo wp_get_attachment_image($backgroud_category, 'full'); ?>
									</span>
									<span class="home_dm--title">
										<h3 class="title-sm cl-white fl-sec fw-7 t-center"><?php echo $term_name; ?></h3>
									</span>
								</a>
							</div>
						</div>
						<?php } }?>
					</div>
				</div>
				<div class="box-navi">
					<div class="btn-navi prev">
						<i class="fas fa-chevron-left">

						</i>
					</div>
					<div class="btn-navi next">
						<i class="fas fa-chevron-right">

						</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php } ?>