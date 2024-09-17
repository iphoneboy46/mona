<footer class="footer">
	<div class="footer-wrap">
		<div class="footer-top">
			<div class="container">
				<div class="footer-top-wrap d-wrap">
					<div class="footer-top-lf d-item d-2">
						<?php if ( !is_user_logged_in() ) : ?>
						<div class="footer-top-lf-wrap">
							<?php if ( is_user_logged_in() ) { ?>
							<p class="node-md cl-white fw-7 t-up">
								<?php $mona_cf7_detail = mona_get_option('mona_cf7_detail');
                if( !empty( $mona_cf7_detail ) ){
                  echo $mona_cf7_detail;
                }else {
                  echo __('ĐĂNG NHẬP ĐỂ NHẬN ƯU ĐÃI', 'monamedia');
                } ?>
							</p>
							<div class="sign_form">
								<form action="" class="is-loading-group" id="mona-login-form">
									<div class="sign_form--wrap">
										<div class="sign_form--list">
											<div class="sign_form--item">
												<div class="form-ip">
													<div class="form-ip-ip custom-ip">
														<input id="email" class="re-input" name="user_name" required type="text"
															placeholder="<?php echo __('Nhập Email', 'monamedia') ?>">
													</div>
												</div>
											</div>
											<div class="sign_form--item">
												<div class="form-ip">
													<div class="form-ip-ip pass custom-ip">
														<input class="password re-input" id="pass" type="password" name="user_pass" required
															placeholder="<?php echo __('Nhập mật khẩu', 'monamedia') ?>">

														<span class="form-ip-ic hidden-pass">
															<i class="fal fa-eye-slash"></i>
														</span>
														<span class="form-ip-ic show-pass">
															<i class="fal fa-eye"></i>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div class="sign_control">
											<div class="sign_cs">
												<label class="sign_cs--label">
													<input type="checkbox">
													<span class="box"></span>
													<span class="note-sm cl-white">
														<?php echo __( 'Đồng ý với ', 'monamedia' ) ?><a
															href="<?php echo get_the_permalink(MONA_PAGE_POLICY_PRIMARY); ?>" target="_blank">
															<?php echo __( ' Chính sách Quyền riêng tư ', 'monamedia' ) ?>
														</a><?php echo __( ' của chúng tôi', 'monamedia' ) ?></span>
												</label>
											</div>
										</div>
										<div class="sign_btn">
											<button class="btn">
												<span class="btn-text">
													<?php echo __( 'Đăng Nhập', 'monamedia' ) ?>
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
							<?php } else { ?>
							<p class="node-md cl-white fw-7 t-up">
								<?php $mona_cf7_detail = mona_get_option('mona_cf7_detail');
                if( !empty( $mona_cf7_detail ) ){
                  echo $mona_cf7_detail;
                }else {
                  echo __('ĐĂNG NHẬP ĐỂ NHẬN ƯU ĐÃI', 'monamedia');
                } ?>
							</p>
							<div class="sign_form">
								<form action="" class="is-loading-group" id="mona-login-form">
									<div class="sign_form--wrap">
										<div class="sign_form--list">
											<div class="sign_form--item">
												<div class="form-ip">
													<div class="form-ip-ip custom-ip">
														<input id="email" class="re-input" name="user_name" required type="text"
															placeholder="<?php echo __('Nhập Email', 'monamedia') ?>">
													</div>
												</div>
											</div>
											<div class="sign_form--item">
												<div class="form-ip">
													<div class="form-ip-ip pass custom-ip">
														<input class="password re-input" id="pass" type="password" name="user_pass" required
															placeholder="<?php echo __('Nhập mật khẩu', 'monamedia') ?>">

														<span class="form-ip-ic hidden-pass">
															<i class="fal fa-eye-slash"></i>
														</span>
														<span class="form-ip-ic show-pass">
															<i class="fal fa-eye"></i>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div class="sign_control">
											<div class="sign_cs">
												<label class="sign_cs--label">
													<input type="checkbox">
													<span class="box"></span>
													<span class="note-sm cl-white">
														<?php echo __( 'Đồng ý với ', 'monamedia' ) ?><a
															href="<?php echo get_the_permalink(MONA_PAGE_POLICY_PRIMARY); ?>" target="_blank">
															<?php echo __( ' Chính sách Quyền riêng tư ', 'monamedia' ) ?>
														</a><?php echo __( ' của chúng tôi', 'monamedia' ) ?></span>
												</label>
											</div>
										</div>
										<div class="sign_btn">
											<button class="btn">
												<span class="btn-text">
													<?php echo __( 'Đăng Nhập', 'monamedia' ) ?>
												</span>
											</button>
										</div>
									</div>
								</form>
							</div>
							<?php } ?>
						</div>
						<?php endif; ?>
					</div>
					<div class="footer-top-rt d-item d-2">
						<div class="footer-top-rt-wrap">
							<div class="footer-top-rt-list">
								<div class="footer-top-rt-item">
									<p class="note-md fw-7 cl-white t-up">
										<?php echo __( 'SẢN PHẨM', 'monamedia' ) ?>
									</p>
									<?php if (has_nav_menu('footer-menu-product')) {
											wp_nav_menu(array(
											'theme_location' => 'footer-menu-product',
											'container' => false,
											'menu_id' => '',
											'menu_class' => 'menu-list',
											'fallback_cb' => false,
											'depth' => 5,
											'walker' => new Mona_Walker_Nav_Menu(),
										));
										}
                  ?>

								</div>
								<div class="footer-top-rt-item">
									<p class="note-md fw-7 cl-white t-up">
										<?php echo __(' GIỚI THIỆU ', 'monamedia' ) ?>
									</p>
									<?php if (has_nav_menu('footer-menu-about')) {
											wp_nav_menu(array(
											'theme_location' => 'footer-menu-about',
											'container' => false,
											'menu_id' => '',
											'menu_class' => 'menu-list',
											'fallback_cb' => false,
											'depth' => 5,
											'walker' => new Mona_Walker_Nav_Menu()
										));
										}
                  ?>
								</div>
								<div class="footer-top-rt-item">
									<p class="note-md fw-7 cl-white t-up">
										<?php echo __( 'TRỢ GIÚP', 'monamedia' ) ?>
									</p>
									<?php if (has_nav_menu('footer-menu-support')) {
											wp_nav_menu(array(
											'theme_location' => 'footer-menu-support',
											'container' => false,
											'menu_id' => '',
											'menu_class' => 'menu-list',
											'fallback_cb' => false,
											'depth' => 5,
											'walker' => new Mona_Walker_Nav_Menu()
										));
										}
                  ?>
								</div>
								<div class="footer-top-rt-item">
									<p class="note-md fw-7 cl-white t-up">
										<?php echo __( 'CỬA HÀNG', 'monamedia' ) ?>
									</p>
									<?php if (has_nav_menu('footer-menu-store')) {
											wp_nav_menu(array(
											'theme_location' => 'footer-menu-store',
											'container' => false,
											'menu_id' => '',
											'menu_class' => 'menu-list',
											'fallback_cb' => false,
											'depth' => 5,
											'walker' => new Mona_Walker_Nav_Menu()
										));
										}
                  ?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-center">
			<div class="container">
				<div class="footer-center-wrap">
					<div class="footer-center-img">
						<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/bct.png" alt="" />
					</div>
					<?php $contact_social_items = mona_get_option('contact_social_items');
            if( is_array( $contact_social_items ) || !empty( $contact_social_items ) ){ ?>
					<ul class="social-mb-list">
						<?php foreach( $contact_social_items as $item ){  ?>
						<li class="social-mb-item">
							<a class="social-mb-link" href="<?php echo !empty( $item['link'] ) ? $item['link'] : 'javascript:;' ?>"
								target="<?php echo !empty( $item['link'] ) ? '_blank' : '' ?>">
								<img src="<?php echo $item['icon'] ?>" alt="" />
							</a>
						</li>
						<?php } ?>
					</ul>
					<?php } ?>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="footer-bottom-wrap">
					<ul class="footer-bottom-list">
						<li class="footer-bottom-item">
							<a class="footer-bottom-link" href="javascript:;">
								<?php echo get_bloginfo('name'); ?>
							</a>
						</li>
						<?php $mona_mail = mona_get_option('mona_mail');
						if( !empty( $mona_mail ) ){  ?>
						<li class="footer-bottom-item">
							<a class="footer-bottom-link" href="mailto:	<?php echo $mona_mail; ?>">
								<?php echo __( 'Email: ', 'monamedia' ) . $mona_mail; ?>
							</a>
						</li>
						<?php } ?>

						<?php  $mona_hotline = mona_get_option('mona_hotline');
            if( !empty( $mona_hotline ) ){  ?>
						<li class="footer-bottom-item">
							<a class="footer-bottom-link" href="<?php echo mona_replace_tel($mona_hotline); ?>">
								<?php echo __( 'Hotline: ', 'monamedia' ) . $mona_hotline; ?>
							</a>
						</li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>

<div class="links-main">
	<ul class="links-main-list">
		<?php  $mona_hotline = mona_get_option('mona_hotline');
			if( !empty( $mona_hotline ) ){  ?>
		<li class="links-main-item">
			<a class="link-items-phone" href="<?php echo mona_replace_tel($mona_hotline); ?>">
				<span class="link-items-phone-img">
					<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/phoneLinkMain.svg" alt="">
				</span>
				<span class="link-items-phone-text">
					<?php echo $mona_hotline; ?>
				</span>
			</a>
		</li>
		<?php } ?>
		<?php  $mona_messenger = mona_get_option('mona_messenger');
		if( !empty( $mona_messenger ) ){  ?>
		<li class="links-main-item">
			<a class="link-items" href="<?php echo $mona_messenger; ?>" target="_blank">
				<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/messengerLinkMain.svg" alt="">
			</a>
		</li>
		<?php } ?>
		<?php  $mona_hotline = mona_get_option('mona_hotline');
		if( !empty( $mona_hotline ) ){  ?>
		<li class="links-main-item">
			<a class="link-items" href="https://zalo.me/<?php echo mona_replace($mona_hotline); ?>" target="_blank">
				<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/zaloLinkMain.svg" alt="">
			</a>
		</li>
		<?php } ?>
	</ul>
	<div class="btn-social">
		<i class="fas fa-info">

		</i>
	</div>
	<div class="btn-top link-top">
		<div class="scroll-to-top" href="">
			<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/arrowUp.svg" alt="">
		</div>
	</div>
</div>

<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/jquery/jquery.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/swiper/swiper-bundle.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/aos/aos.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/select2/select2.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/gallery/lightgallery-all.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/jquery/jquery-migrate.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/plyr/plyr.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/magnific/jquery.magnific-popup.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/fancybox/fancybox.umd.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/countup/jquery.countup.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/countup/jquery.waypoints.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/gsap/gsap.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/gsap/scrollTrigger.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/scrollFullPage/fullPage.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/magnify/magnify.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/library/datepicker/datepicker.min.js">
</script>
<script src="<?php echo MONA_SITE_TEMPLATE; ?>/js/main.js" type="module">
</script>
<!-- footer -->
<?php wp_footer(); ?>
</body>

</html>