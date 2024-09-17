<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://woo.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;
$product_id = get_the_ID();
/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( 'product_ct--wrap d-wrap', $product ); ?>>
	<div class="product_ct--lf d-item d-2">
        <div class="product_ct--lf-wrap">
            <div class="product_ct--lf-bgs gallery">
				<?php
				/**
				 * Hook: woocommerce_before_single_product_summary.
				 *
				 * @hooked woocommerce_show_product_sale_flash - 10
				 * @hooked woocommerce_show_product_images - 20
				 */
				do_action( 'woocommerce_before_single_product_summary' );
				?>
				<div class="box-navi">
                      <div class="btn-navi prev">
                        <i class="fas fa-chevron-left"></i>
                      </div>
                      <div class="btn-navi next">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
            </div>
        </div>
    </div>
	<div class="product_ct--rt d-item d-2">
		<div class="summary entry-summary">
			<div class="product_ct--rt-wrap">
				<div class="product_ct--rt-info">
					<?php
					/**
					 * Hook: woocommerce_single_product_summary.
					 *
					 * @hooked woocommerce_template_single_title - 5
					 * @hooked woocommerce_template_single_rating - 10
					 * @hooked woocommerce_template_single_price - 10
					 * @hooked woocommerce_template_single_excerpt - 20
					 * @hooked woocommerce_template_single_add_to_cart - 30
					 * @hooked woocommerce_template_single_meta - 40
					 * @hooked woocommerce_template_single_sharing - 50
					 * @hooked WC_Structured_Data::generate_product_data() - 60
					 */
					do_action( 'woocommerce_single_product_summary' );
					?>
				</div>
				<div class="product_ct--rt-cs tab-box">
					<div class="product_ct--cs-tabs">
						<h3 class="product_ct--cs-tab tab-btn actived">
							<?php echo __( 'Thông tin sản phẩm', 'monamedia' ) ?></h3>
						<h3 class="product_ct--cs-tab tab-btn">
							<?php echo __( 'Chính sách bán hàng', 'monamedia' ) ?></h3>
					</div>
					<div class="product_ct--cs-contents">

						<div class="product_ct--cs-content tab-content showed">
							<p class="note-text">
								<?php the_content(); ?>
							</p>
						</div>
						<div class="product_ct--cs-content tab-content">
							<?php echo get_field('mon_single_product_policy'); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>
<?php do_action( 'woocommerce_after_single_product' ); ?>