<?php
/**
 * My Account navigation
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/navigation.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_account_navigation' );
?>

<div class="layoutG_wrap d-wrap">
	<div class="layoutG_rt d-item">
		<div class="layoutG_rt--wrap">
			<h1 class="title-sm fw-7 cl-text fl-sec t-up">
				<?php echo __('TÀI KHOẢN', 'monamedia'); ?>
			</h1>
			<div class="layoutG_rt--content">
				<div class="admin_acc">
					<div class="admin_acc--wrap">
						<div class="admin_acc--form">
							<form action="" id="f-change-password" class="is-loading-group">
								<div class="admin_acc--form-wrap">
									<div class="admin_acc--list">
										<div class="admin_acc--item">
											<div class="form-ip">
												<div class="form-ip-label">
													<label for="name2">
														<?php echo __('Mật khẩu hiện tại', 'monamedia'); ?>
													</label>
												</div>
												<div class="form-ip-ip pass">
													<input id="name2" class="re-input password" type="password" name="current-password" required
														placeholder="<?php _e('Nhập mật khẩu hiện tại') ?>">
													<span class="form-ip-ic hidden-pass">
														<i class="fal fa-eye-slash"></i>
													</span>
													<span class="form-ip-ic show-pass">
														<i class="fal fa-eye"></i>
													</span>
												</div>
											</div>
										</div>
										<div class="admin_acc--item">
											<div class="form-ip">
												<div class="form-ip-label">
													<label for="email2">
														<?php _e('Mật khẩu mới', 'monamedia') ?>
													</label>
												</div>
												<div class="form-ip-ip pass">
													<input id="email2" class="re-input password" type="password" name="new-pass" required
														placeholder="<?php _e('Nhập mật khẩu mới') ?>">
													<span class="form-ip-ic hidden-pass">
														<i class="fal fa-eye-slash"></i>
													</span>
													<span class="form-ip-ic show-pass">
														<i class="fal fa-eye"></i>
													</span>
												</div>
											</div>
										</div>
										<div class="admin_acc--item">
											<div class="form-ip">
												<div class="form-ip-label">
													<label for="pass2">
														<?php echo __('Nhập lại mật khẩu mới', 'monamedia'); ?>
													</label>
												</div>
												<div class="form-ip-ip pass">
													<input id="pass2" class="password re-input" type="password" required name="new-repass"
														placeholder="<?php _e('Nhập lại mật khẩu') ?>">

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
									<button class="btn"> <span class="btn-text">
											<?php echo __('CẬP NHẬT', 'monamedia'); ?>
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<?php do_action( 'woocommerce_after_account_navigation' ); ?>