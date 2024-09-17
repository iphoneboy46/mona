<?php
/**
 * Section name: Home Our products
 * Description: 
 * Author: Monamedia
 * Order: 0
 */
$obj = get_queried_object();
$obj_id = get_queried_object_id();
$action_layout = 'reload'; // loadmore / reload
$post_type          = 'product'; // product
$posts_per_page = 8;

$box = get_field('mon_home_product_outstanding_post', $obj_id);
if ( content_exists($box)) { ?>
<section class="product noneBorder">
	<div class="container">
		<div class="product_wrap list-product">
			<div class="box-title free-slide2">
				<h2 class="title-sm3" data-aos="fade-right">
					<?php echo __( 'SẢN PHẨM NỔI BẬT', 'monamedia' ) ?>
				</h2>
				<div class="box-title-filters d-wrap"  data-aos="fade-left">
					<div class="swiper mySwiper">
						<div class="swiper-wrapper">
							<?php 
							$term_ids = array();
							foreach ($box as $key => $item) {
								if (!is_wp_error($item)) { 
									$term_ids[] = $item->term_id; ?>
							<div class="swiper-slide d-item">
								<label class="box-title-filter tab-product_cat <?php echo $key == 0 ? 'actived' : '' ?>"
									name="taxonomies[product_cat][]" data-cat="<?php echo $item->term_id ?>">
									<a class="box" href="<?php echo get_term_link($item) ?>"><?php echo $item->name; ?></a>
								</label>
							</div>
							<?php } } ?>
						</div>
					</div>
					<div class="swiper-scrollbar"></div>
				</div>
			</div>
			<div class="product_list d-wrap is-loading-btn"  data-aos="fade-up">
				<?php 
				$args = [
					'post_type'      => $post_type,
					'post_status' => 'publish',
					'posts_per_page' => $posts_per_page,
					'order' => 'DESC',
					'meta_query'     => [
						[
							'key'   => 'option_product_your_like',
							'value' => true,
						],
					],
					// 'tax_query' => array(
					// 	array(
					// 		'taxonomy' => 'product_cat',
					// 		'field'    => 'term_id',
					// 		'terms' => $box[0]->term_id
					// ),
					// )
				];

				$queryPro = new WP_Query($args);
				while ($queryPro->have_posts()) {
				$queryPro->the_post(); ?>
				<?php woocommerce_product_loop_start(); ?>
				<?php 
					/**
					 * GET TEMPLATE PART
					 * PRODUCT
					 */
					$slug = '/partials/loop/box';
					$name = 'product';
					echo get_template_part($slug, $name);
				?>
				<?php woocommerce_product_loop_end(); ?>
				<?php } wp_reset_query(); ?>
			</div>
		</div>
	</div>
</section>

<?php } ?>