<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://woo.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header(); 
// $product_id = get_the_ID();

global $post;
$product_id     = $post->ID;
$product_obj  = wc_get_product($product_id);
$product_type = $product_obj->get_type();

?>
<main class="main pt">
	<section class="product_ct">
		<div class="container">
			<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			<?php wc_get_template_part( 'content', 'single-product' ); ?>
			<?php endwhile; // end of the loop. ?>
		</div>
	</section>

	<?php 
	get_template_part('partials/single/product/technical'); 
	get_template_part('partials/single/product/change'); 
	$product_parallax = get_field('mon_single_product_parallax', $product_id );
  	?>
	<section class="product_bg">
		<div class="product_bg--wrap">
			<div class="product_bg--img">
				<?php 
				if ( !empty( $product_parallax ) ) {
				echo wp_get_attachment_image( $product_parallax , 'full'); 
				} else { ?>
				<img src="<?php echo MONA_SITE_TEMPLATE; ?>/assets/images/abbg.png" alt="" />
				<?php } ?>
			</div>
		</div>
	</section>
	<?php // get_template_part('partials/single/product/your-like'); ?>
</main>
<?php
get_footer();

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */