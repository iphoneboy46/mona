<?php

/**
 * Template name: Home Page
 * @author : Hy Hý
 */
get_header();
while (have_posts()) :
	the_post();
	$mona_phone_contact = mona_get_option('mona_phone_contact');
	$sc_1_group = get_field('sc_1_group');
?>

	<main class="main">
		<a class="block-sale" href="#js-modal-save" rel="modal:open">
			<?php echo $sc_1_group['phantram_sale'] ?>
		</a>
		<?php get_template_part('partials/home/banners'); ?>

		<?php
		$sc_2_group = get_field('sc_2_group');
		if (!empty($sc_2_group)) {
			$content_sc_2 = $sc_2_group['content_sc_2'];
			$background_sc_2 = $sc_2_group['background_sc_2'];
		}
		?>
		<div class="block-slogan" style="background-image: url(<?php echo wp_get_attachment_image_url($background_sc_2, 'full') ?>);">
			<h2 class="slogan_title">
				<?php
				echo $content_sc_2;
				?>
			</h2>
		</div>

		<?php $mona_best_seller = get_field('mona_best_seller');
		if (!empty($mona_best_seller)) {

			$Bestselling = array(
				'post_type' => 'product',
				'post_status' => 'publish',
				'post__in' => $mona_best_seller['relationship'],
				'orderby' => 'post__in',
				'posts_per_page' => 6,
			);
			$the_query_Bestselling = new WP_Query($Bestselling);

			if ($the_query_Bestselling->have_posts()) {

		?>

				<section class="section-home-seller">
					<div class="wrapper">
						<h2 class="section-title"> <?php echo $mona_best_seller['title'] ?></h2>
						<div class="seller_list">
							<div class="js-seller-swiper swiper-container">
								<div class="swiper-wrapper">
									<?php
									while ($the_query_Bestselling->have_posts()) :

										$the_query_Bestselling->the_post();
										echo ' <div class="swiper-slide">';
										get_template_part('woocommerce/global/item-page');
										echo '  </div>';
									endwhile;
									wp_reset_query();
									?>
								</div>
							</div>
						</div>
						<div class="swiper_control">
							<div class="swiper-button-prev seller-button"></div>
							<div class="swiper-pagination seller-pagination"></div>
							<div class="swiper-button-next seller-button"></div>
						</div>
					</div>
				</section>
		<?php }
		} ?>
		<?php $mona_collections = get_field('mona_collections');
		if (!empty($mona_collections)) {

			if (!empty($mona_collections['taxonomy'])) {

		?>
				<section class="section-home-collections">
					<div class="wrapper">
						<h2 class="section-title"><?php echo $mona_collections['title'] ?></h2>
						<ul class="collections_list">
							<?php foreach ($mona_collections['taxonomy'] as $item) {
								$permalink = get_term_link($item);
								$term = get_term($item, 'product_cat');
								$category_image_id = get_term_meta($item, 'thumbnail_id', true);
							?>
								<li class="l-product_item is-collection">
									<div class="item_image">
										<a href="<?php echo $permalink ?>">
											<?php echo wp_get_attachment_image($category_image_id, 'full') ? wp_get_attachment_image($category_image_id, 'full') : '<img src ="' . MONA_DEFAULT . '" alt="">' ?>
										</a>

									</div>
									<div class="item_detail">
										<h3 class="detail_title">
											<a href=" <?php echo $permalink ?>">
												<?php echo $term->name ?>
											</a>
										</h3>

										<p class="detail_text">
											<?php echo $term->description ?>
										</p>
										<a class="more_btn" href="<?php echo $permalink ?>">MORE INFOMATION</a>
									</div>
								</li>
							<?php }
							wp_reset_postdata() ?>
						</ul>
					</div>
				</section>
		<?php }
		} ?>
		<?php
		$sc_3_group = get_field('sc_3_group');
		if (!empty($sc_3_group)) {
			$title_sc_3 = $sc_3_group['title_sc_3'];
			$des_sc_3 = $sc_3_group['des_sc_3'];
			$link_sc_3 = $sc_3_group['link_sc_3'];
			$rp_1_sc_3 = $sc_3_group['rp_1_sc_3'];
			$rp_2_sc_3 = $sc_3_group['rp_2_sc_3'];
		}
		?>

		<section class="section-home-about">
			<div class="wrapper">
				<div class="about_content">
					<h2 class="section-title">
						<?php
						echo $title_sc_3;
						?>
					</h2>
					<p class="about_text">
						<?php
						echo $des_sc_3;
						?>
					</p>
					<div class="primary-button"><a href="<?php echo esc_url($link_sc_3); ?>"><?php echo _e('START YOUR JOURNEY', 'monamedia'); ?></a>
					</div>
				</div>
				<div class="about_swiper">

					<?php
					if (!empty($rp_1_sc_3)) {
					?>

						<div class="swiper_block">
							<div class="js-about-swiper">

								<?php
								foreach ($rp_1_sc_3 as $key => $item) {
								?>

									<div class="slide">
										<div class="slide_img">
											<?php echo wp_get_attachment_image($item['image_rp_1'], 'full'); ?>
										</div>
									</div>

								<?php
								}
								?>

							</div>
						</div>

					<?php
					}
					?>

					<?php
					if (!empty($rp_2_sc_3)) {
					?>

						<div class="swiper_block">
							<div class="js-about-swiper-revert">

								<?php
								foreach ($rp_2_sc_3 as $key => $item) {
								?>

									<div class="slide">
										<div class="slide_img">
											<?php echo wp_get_attachment_image($item['image_rp_2'], 'full'); ?>
										</div>
									</div>

								<?php
								}
								?>

							</div>
						</div>

					<?php
					}
					?>
				</div>
			</div>
		</section>

		<?php
		$sc_4_group = get_field('sc_4_group');
		if (!empty($sc_4_group)) {
			$title_sc_4 = $sc_4_group['title_sc_4'];
			$rp_1_sc_4 = $sc_4_group['rp_1_sc_4'];
		}
		?>

		<section class="section-home-choose"><span class="decoration_circle"></span>
			<div class="wrapper">
				<h2 class="section-title">
					<?php
					echo $title_sc_4;
					?>
				</h2>

				<?php
				if (!empty($rp_1_sc_4)) {
				?>


					<ul class="choose_list">

						<?php
						foreach ($rp_1_sc_4 as $key => $item) {
						?>

							<li>
								<div class="item_icon">
									<?php echo wp_get_attachment_image($item['icon_rp_1_sc_4'], 'full'); ?>
								</div>
								<h3 class="item_title">
									<?php echo $item['title_rp_1_sc_4']; ?>
								</h3>
								<p class="item_text">
									<?php echo $item['des_rp_1_sc_4']; ?>
								</p>
							</li>

						<?php
						}
						?>

					</ul>

				<?php
				}
				?>

			</div>
		</section>

		<?php
		$sc_5_group = get_field('sc_5_group');
		if (!empty($sc_5_group)) {
			$title_sc_5 = $sc_5_group['title_sc_5'];
			$select = $sc_5_group['select'];
			$relationship = $sc_5_group['relationship'];
		}
		?>

		<section class="section-home-sales"><span class="decoration_circle"></span>
			<div class="wrapper">
				<h2 class="section-title">
					<?php
					echo $title_sc_5;
					?>
				</h2>
			</div>

			<?php
			$count = -1;
			$paged = max(1, get_query_var('paged'));
			$offset = ($paged - 1) * $count;

			$arg_project = [
				'post_type' => 'post_type_our_sales',
				'post_status' => 'publish',
				'posts_per_page' => $count,
				'offset'         => $offset,
				'paged'          => $paged,
			];

			if ($select == '2') {
				$arg_project['orderby'] = 'post__in';
				$arg_project['post__in'] = $relationship;
			} else {
				$arg_project['order'] = 'desc';
			}
			$loop_project = new WP_Query($arg_project);
			if ($loop_project->have_posts()) :
				$count = 0;
			?>

				<div class="container-sales">
					<div class="sales_swiper">
						<div class="js-sales-swiper swiper-container">
							<div class="swiper-wrapper">

								<?php
								while ($loop_project->have_posts()) :
									$loop_project->the_post();
									global $post;
									$mona_outteam_select = get_field('mona_outteam_select', $post);
									$link_contact = get_field('link_contact', $post);
									$mona_outteam_social = get_field('mona_outteam_social', $post);
								?>

									<div class="swiper-slide">
										<div class="inner">
											<div class="slide_img">
												<?php echo get_the_post_thumbnail($post->ID, 'full'); ?>
											</div>
											<h3 class="slide_name"> <?php echo $post->post_title; ?></h3>
											<div class="slide_btn out-sale-team">
												<?php if ($mona_outteam_select == 1) { ?>
													<a href="<?php echo  $link_contact  ?>">
														<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.3053 3.86842C11.1278 4.0289 11.8837 4.43116 12.4763 5.02374C13.0688 5.61631 13.4711 6.37222 13.6316 7.19474M10.3053 0.5C12.0141 0.689841 13.6077 1.45509 14.8242 2.67011C16.0408 3.88513 16.808 5.47769 17 7.18632M14.0526 16.5C6.84385 16.5 1 10.6561 1 3.44737C1 3.12213 1.0119 2.79967 1.03527 2.4804C1.06211 2.11399 1.07552 1.93079 1.17154 1.76403C1.25106 1.62591 1.392 1.49491 1.53556 1.42569C1.70889 1.34211 1.91105 1.34211 2.31538 1.34211H4.68784C5.02784 1.34211 5.19785 1.34211 5.34359 1.39806C5.47232 1.44749 5.58695 1.52778 5.67739 1.63187C5.77979 1.74971 5.83789 1.90948 5.95408 2.22902L6.93607 4.92951C7.07126 5.30129 7.13886 5.48717 7.12738 5.66354C7.11727 5.81905 7.06419 5.9687 6.97407 6.09584C6.87187 6.24003 6.70226 6.34179 6.36304 6.54532L5.21052 7.23684C6.22264 9.46747 8.03168 11.2789 10.2631 12.2895L10.9547 11.1369C11.1582 10.7977 11.2599 10.6281 11.4041 10.5259C11.5313 10.4358 11.6809 10.3827 11.8364 10.3726C12.0128 10.3611 12.1987 10.4287 12.5705 10.5639L15.2709 11.5459C15.5905 11.6621 15.7502 11.7202 15.8681 11.8226C15.9722 11.913 16.0525 12.0277 16.1019 12.1564C16.1579 12.3021 16.1579 12.4721 16.1579 12.8122V15.1846C16.1579 15.5889 16.1579 15.7911 16.0743 15.9644C16.005 16.108 15.8741 16.2489 15.7359 16.3285C15.5692 16.4245 15.386 16.4379 15.0196 16.4647C14.7003 16.4881 14.3778 16.5 14.0526 16.5Z" stroke="#F3F4F6" stroke-linecap="round" stroke-linejoin="round" />
														</svg>
														<?php _e('Contact now', 'monamedia') ?>
													</a>
													<?php } else {
													if (!empty($mona_outteam_social)) { ?>
														<div class="t-list">
															<?php foreach ($mona_outteam_social as $key => $item) { ?>
																<a class="i-link" href="<?php echo $item['link'] ?>" target="1">
																	<?php echo wp_get_attachment_image($item['icon'], 'full') ?>
																</a>
															<?php } ?>
														</div>
												<?php }
												} ?>
											</div>
										</div>
									</div>

								<?php
								endwhile;
								wp_reset_postdata();
								?>

							</div>
							<div class="swiper_control">
								<div class="swiper-button-prev seller-button2"></div>

								<div class="swiper-pagination seller-pagination"></div>

								<div class="swiper-button-next seller-button2"></div>
							</div>
						</div>
					</div>
				</div>

			<?php
			endif;
			?>


		</section>

		<!-- contact us  -->
		<?php get_template_part('partials/global/contact-us') ?>

		<?php
		$sc_1_group = get_field('sc_1_group');
		if (!empty($sc_1_group)) {
			$title_2_sc_1 = $sc_1_group['title_2_sc_1'];
			$des_2_sc_1 = $sc_1_group['des_2_sc_1'];
			$shortcode_save_sc_1 = $sc_1_group['shortcode_save_sc_1'];
			$image_sc_1 = $sc_1_group['image_sc_1'];
		}
		?>

		<div class="modal modal-save" id="js-modal-save">
			<div class="save_inner">
				<div class="save_content">
					<h2 class="save_title font-vogue">
						<?php
						echo $title_2_sc_1;
						?>
					</h2>
					<p class="save_text">
						<?php
						echo $des_2_sc_1;
						?>
					</p>
					<div class="save_form">
						<?php
						if (!empty($shortcode_save_sc_1)) {
							echo do_shortcode($shortcode_save_sc_1);
						}
						?>

					</div>
				</div>
				<div class="save_image">

					<?php echo wp_get_attachment_image($image_sc_1, 'full'); ?>
				</div>
			</div>
		</div>

	</main>

<?php
endwhile;
get_footer();
