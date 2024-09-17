<?php

/**
 * Template name: Home Page
 * @author : Hy Hý
 */
get_header();
while (have_posts()) :
    the_post();

    $title = get_the_title();

    $mona_sc1_group             = get_field('mona_sc1_group');
    $mona_sc1_rp                = $mona_sc1_group['mona_sc1_rp'];
    $gallery_sc1                = $mona_sc1_group['gallery_rp'];
    $mona_rp                    = get_field('mona_rp');
    $mona_tax_product_feature   = get_field('mona_tax_product_feature');
    $mona_tax_pro               = get_field('mona_tax_pro');
    $mona_banner                = get_field('mona_banner');
    $mona_tax2_pro              = get_field('mona_tax2_pro');
    $mona_sc2_group             = get_field('mona_sc2_group');
    $mona_sc3_group             = get_field('mona_sc3_group');
    $mona_sc6_group             = get_field('mona_sc6_group');

    $action_layout  = 'reload'; // loadmore / reload
    $count          = 8;
    $paged          = max(1, get_query_var('paged'));
    $offset         = ($paged - 1) * $count;
    $post_type      = 'product';

    $Product                = array(
        'post_type'         => $post_type,
        'post_status'       => 'publish',
        'posts_per_page'    => $count,
        'meta_query'        => [
            'relation'      => 'AND',
        ],
    );

?>
    <main class="main pt">

        <form id="formPostAjax" data-layout="<?php echo $action_layout; ?>">
            <input type="hidden" name="post_type" value="<?php echo $post_type; ?>" />
            <input type="hidden" name="posts_per_page" value="<?php echo $count; ?>" />
            <?php if (is_tax()) {
                $current_cat = get_queried_object(); ?>
                <input type="hidden" name="taxonomies[<?php echo $current_cat->taxonomy; ?>]" value="<?php echo $current_cat->slug ?>" />
            <?php } ?>

            <div class="banner_home free-slide">
                <h1><?php echo $title; ?></h1>
                <div class="container">
                    <div class="banner_home--wrap">

                        <?php
                        $mona_tax_pro_header_group  = get_field('mona_tax_pro_header_group', MONA_PAGE_HOME);
                        $mona_tax_pro_header        = $mona_tax_pro_header_group['mona_tax_pro_header'];
                        $mona_tax_custom            = $mona_tax_pro_header_group['mona_tax_custom'];

                        if (!empty($mona_tax_pro_header) || !empty($mona_tax_custom)) : ?>
                            <div class="banner_home--lf" data-aos="fade-right">
                                <div class="banner_home--lf-wrap">
                                    <div class="menu-mega-lf-wrap">
                                        <ul class="menu-mega-lf-list">
                                            <?php if (!empty($mona_tax_pro_header)) : ?>
                                                <!-- actived -->
                                                <?php foreach ($mona_tax_pro_header as $key => $item) :
                                                    $link_term = get_term_link($item, 'product_cat');
                                                    $tax_icon = get_field('tax_icon', $item->taxonomy . '_' . $item->term_id);
                                                ?>
                                                    <li class="menu-mega-lf-item menuMgTitle2">
                                                        <a class="menu-mega-lf-link" href="<?php echo $link_term; ?>">
                                                            <span class="menu-mega-lf-ic">
                                                                <?php echo wp_get_attachment_image($tax_icon, 'full'); ?>
                                                            </span>
                                                            <span class="note-md"><?php echo $item->name; ?></span>
                                                        </a>
                                                    </li>

                                                <?php endforeach; ?>
                                            <?php endif; ?>

                                            <!-- Link custom -->
                                            <?php if (!empty($mona_tax_custom)) : ?>
                                                <?php foreach ($mona_tax_custom as $key => $item) : ?>
                                                    <li class="menu-mega-lf-item menuMgTitle2">
                                                        <a class="menu-mega-lf-link" href="<?php echo $item['link']; ?>">
                                                            <span class="menu-mega-lf-ic">
                                                                <?php echo wp_get_attachment_image($item['icon'], 'full'); ?>
                                                            </span>
                                                            <span class="note-md"><?php echo $item['title']; ?></span>
                                                        </a>
                                                    </li>
                                                <?php endforeach; ?>
                                            <?php endif; ?>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>

                        <div class="banner_home--rt" data-aos="fade-left">
                            <div class="banner_home--rt-wrap">

                                <?php if (!empty($mona_sc1_rp)) : ?>
                                    <div class="banner_home--rt-lf">
                                        <div class="banner_home--rt-lf-wrap">
                                            <div class="swiper mySwiper --auto">
                                                <div class="swiper-wrapper">

                                                    <?php foreach ($mona_sc1_rp as $key => $item) : ?>
                                                        <div class="swiper-slide">
                                                            <div class="banner_home--item">
                                                                <div class="banner_home--bg">
                                                                    <?php echo wp_get_attachment_image($item['background'], 'full'); ?>
                                                                </div>
                                                                <div class="banner_home--box">
                                                                    <div class="banner_home--content">
                                                                        <p class="title-main"><?php echo $item['title']; ?></p>
                                                                        <p class="note-text cl-white"><?php echo $item['content']; ?></p>
                                                                        <a class="btn" href="<?php echo $item['link']; ?>"><span class="btn-text"><?php _e('Tìm hiểu thêm', 'monamedia') ?></span></a>
                                                                    </div>
                                                                    <div class="banner_home--img">
                                                                        <div class="banner_home--img-wrap">
                                                                            <?php echo wp_get_attachment_image($item['image'], 'full'); ?>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <?php endforeach; ?>

                                                </div>
                                            </div>
                                            <div class="swiper-pagination"></div>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <?php if (!empty($gallery_sc1)) : ?>
                                    <div class="banner_home--rt-rt">
                                        <div class="banner_home--rt-rt-wrap">

                                            <?php foreach ($gallery_sc1 as $key => $item) : ?>
                                                <div class="banner_home--rt-item">
                                                    <div class="banner_home--rt-img">
                                                        <?php echo wp_get_attachment_image($item['image'], 'full'); ?>
                                                        <a class="btn" href="<?php echo $item['link']; ?>"><span class="btn-text"><?php _e('Tìm hiểu thêm', 'monamedia') ?></span></a>
                                                    </div>
                                                </div>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>

                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php if (!empty($mona_rp)) : ?>
                <div class="home_said free-slide">
                    <div class="container">
                        <div class="home_said--wrap" data-aos="zoom-out">
                            <div class="home_said--list d-wrap">
                                <div class="swiper mySwiper --auto">
                                    <div class="swiper-wrapper">

                                        <?php foreach ($mona_rp as $key => $item) : ?>
                                            <div class="swiper-slide d-item d-3">
                                                <div class="home_said--item">
                                                    <div class="home_said--ic"><?php echo wp_get_attachment_image($item['icon'], 'full'); ?>
                                                    </div>
                                                    <div class="home_said--content">
                                                        <p class="note-lg cl-third fw-7 t-up"><?php echo $item['title']; ?></p>
                                                        <p class="note-text"><?php echo $item['content']; ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php endforeach; ?>

                                    </div>
                                </div>
                                <div class="swiper-pagination custom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <!-- Sản phẩm nổi bật -->
            <?php
            // Featured Product 
            $ProductFeatured = array(
                'post_type'     => $post_type,
                'post_status'   => 'publish',
                'posts_per_page' => $count,
                'meta_query'    => [
                    'relation'     => 'AND',
                ],
                'tax_query'        => [
                    array(
                        'taxonomy' => 'product_visibility',
                        'field'    => 'name',
                        'terms'    => 'featured',
                        'operator' => 'IN',
                    ),
                ],
            );

            $QueryProductFeatured = new WP_Query($ProductFeatured);
            if ($QueryProductFeatured->have_posts()) { ?>
                <div class="home_sp ani bg-w ProductRelated">
                    <div class="container">
                        <div class="home_sp--wrap">
                            <h2 class="title-main"><?php _e('Sản phẩm nổi bật', 'monamedia'); ?></h2>
                            <div class="home_sp--box">

                                <?php if (!empty($mona_tax_product_feature)) : ?>

                                    <div class="home_sp--top free-slide2" data-aos="fade-up">
                                        <div class="home_sp--fts d-wrap">
                                            <div class="swiper mySwiper">
                                                <div class="swiper-wrapper">

                                                    <div class="swiper-slide d-item pro-related">
                                                        <label class="home_sp--ft ">
                                                            <input type="radio" name="product_cat" checked="checked" value="all">
                                                            <div class="home_sp--ft-bg">
                                                                <p class="note-sm"><?php _e('Tất cả', 'monamedia') ?></p>
                                                            </div>
                                                        </label>
                                                    </div>

                                                    <?php foreach ($mona_tax_product_feature as $key => $item) : ?>
                                                        <div class="swiper-slide d-item pro-related">
                                                            <label class="home_sp--ft ">
                                                                <input type="radio" name="<?php echo $item->taxonomy; ?>" value="<?php echo $item->slug; ?>">
                                                                <div class="home_sp--ft-bg">
                                                                    <p class="note-sm"><?php echo $item->name; ?></p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    <?php endforeach; ?>
                                                </div>
                                            </div>
                                            <div class="swiper-scrollbar"></div>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <div class="home_sp--bottom free-slide" data-aos="fade-up">
                                    <div class="sp_lq--list d-wrap">
                                        <div class="swiper mySwiper">
                                            <div class="swiper-wrapper is-loading-group ProductSlideAjax">

                                                <?php while ($QueryProductFeatured->have_posts()) {
                                                    $QueryProductFeatured->the_post(); ?>

                                                    <div class="swiper-slide d-item d-4">
                                                        <div class="sp_lq--item">

                                                            <?php echo get_template_part('partials/product/ItemProduct'); ?>

                                                        </div>
                                                    </div>
                                                <?php }
                                                wp_reset_query($QueryProductFeatured); ?>

                                            </div>
                                        </div>
                                        <div class="box-napa">
                                            <div class="box-napa-wrap">
                                                <div class="btn-navi prev"> <i class="fas fa-chevron-left"></i></div>
                                                <div class="swiper-pagination"> </div>
                                                <div class="btn-navi next"> <i class="fas fa-chevron-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>

            <?php
            // Sản phẩm theo danh mục 
            $cat_id = array();
            if (!empty($mona_tax_pro)) {
                foreach ($mona_tax_pro as $cat) {
                    $cat_id[] = $cat->term_id;
                }
            }

            if (!empty($cat_id)) {
                $Product['tax_query'][] = array(
                    'relation'       => 'AND',
                    array(
                        'taxonomy'  => 'product_cat',
                        'field'     => 'id',
                        'terms'     => $cat_id,
                    ),
                );
            }

            $QueryProduct = new WP_Query($Product);
            if ($QueryProduct->have_posts()) { ?>
                <div class="home_sp ani">
                    <div class="container">
                        <div class="home_sp--wrap">

                            <?php if (!empty($mona_tax_pro)) {
                                foreach ($mona_tax_pro as $cat) {
                                    $link_tax = get_term_link($cat, 'product_cat'); ?>
                                    <h2 class="title-main"><?php echo $cat->name; ?></h2>
                            <?php

                                    $cat_paren_slug     = $cat->slug;
                                    $mona_tax_pro_child = get_terms(array(
                                        'taxonomy'    => 'product_cat',
                                        'parent'      => $cat->term_id,
                                        'hide_empty'  => false,
                                    ));
                                }
                            } ?>

                            <div class="home_sp--box ProductTax">
                                <div class="home_sp--top free-slide2" data-aos="fade-up">
                                    <div class="home_sp--fts d-wrap">
                                        <div class="swiper mySwiper">
                                            <div class="swiper-wrapper">

                                                <div class="swiper-slide d-item pro-related">
                                                    <label class="home_sp--ft ">
                                                        <input type="radio" name="SelectTax" checked="checked" value="<?php echo $cat_paren_slug; ?>">
                                                        <div class="home_sp--ft-bg">
                                                            <p class="note-sm"><?php _e('Tất cả', 'monamedia') ?></p>
                                                        </div>
                                                    </label>
                                                </div>

                                                <?php foreach ($mona_tax_pro_child as $key => $item) : ?>
                                                    <div class="swiper-slide d-item pro-related">
                                                        <label class="home_sp--ft ">
                                                            <input type="radio" name="SelectTax" value="<?php echo $item->slug; ?>">
                                                            <div class="home_sp--ft-bg">
                                                                <p class="note-sm"><?php echo $item->name; ?></p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                <?php endforeach; ?>
                                            </div>
                                        </div>
                                        <div class="swiper-scrollbar"></div>
                                    </div>
                                    <a class="btn" href="<?php echo $link_tax; ?>"><span class="btn-text"><?php _e('Xem tất cả', 'monamedia') ?></span></a>
                                </div>
                                <div class="home_sp--bottom free-slide" data-aos="fade-up">
                                    <div class="sp_lq--list d-wrap">
                                        <div class="swiper mySwiper">
                                            <div class="swiper-wrapper is-loading-group ProductSlideAjax2">

                                                <?php while ($QueryProduct->have_posts()) {
                                                    $QueryProduct->the_post(); ?>
                                                    <div class="swiper-slide d-item d-4">
                                                        <div class="sp_lq--item">

                                                            <?php echo get_template_part('partials/product/ItemProduct'); ?>

                                                        </div>
                                                    </div>
                                                <?php }
                                                wp_reset_query($QueryProduct); ?>

                                            </div>
                                        </div>
                                        <div class="box-napa">
                                            <div class="box-napa-wrap">
                                                <div class="btn-navi prev"> <i class="fas fa-chevron-left"></i></div>
                                                <div class="swiper-pagination"> </div>
                                                <div class="btn-navi next"> <i class="fas fa-chevron-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>

            <?php if (isset($mona_banner) || !empty($mona_banner)) : ?>
                <div class="banner_qc ani">
                    <div class="banner_qc--wrap">
                        <div class="banner_qc--img"> <?php echo wp_get_attachment_image($mona_banner, 'full'); ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <?php if (!empty($mona_tax2_pro)) :
                foreach ($mona_tax2_pro as $keyparent => $item_tax) :
                    $link_term          = get_term_link($item_tax, 'product_cat');
                    $cat_paren_slug     = $item_tax->slug;
                    $mona_tax_pro_child = get_terms(array(
                        'taxonomy'    => 'product_cat',
                        'parent'      => $item_tax->term_id,
                        'hide_empty'  => false,
                    ));

                    $Product            = array(
                        'post_type'     => $post_type,
                        'post_status'   => 'publish',
                        'posts_per_page' => $count,
                        'meta_query'    => [
                            'relation'  => 'AND',
                        ],
                    );

                    $Product['tax_query'][] = array(
                        'relation'       => 'AND',
                        array(
                            'taxonomy'  => 'product_cat',
                            'field'     => 'term_id',
                            'terms'     => $item_tax->term_id,
                        ),
                    );
                    $QueryProduct = new WP_Query($Product);
                    if ($QueryProduct->have_posts()) { ?>
                        <div class="home_sp ani ProductTax<?php echo $keyparent; ?>">
                            <div class="container">
                                <div class="home_sp--wrap">
                                    <h2 class="title-main"><?php echo $item_tax->name; ?></h2>
                                    <div class="home_sp--box">
                                        <div class="home_sp--top free-slide2" data-aos="fade-up">
                                            <div class="home_sp--fts d-wrap">
                                                <div class="swiper mySwiper">
                                                    <div class="swiper-wrapper">

                                                        <div class="swiper-slide d-item pro-related">
                                                            <label class="home_sp--ft ">
                                                                <input type="radio" name="SelectTax<?php echo $keyparent; ?>" checked="checked" value="<?php echo $cat_paren_slug; ?>">
                                                                <div class="home_sp--ft-bg">
                                                                    <p class="note-sm"><?php _e('Tất cả', 'monamedia') ?></p>
                                                                </div>
                                                            </label>
                                                        </div>

                                                        <?php foreach ($mona_tax_pro_child as $key => $item) : ?>
                                                            <div class="swiper-slide d-item pro-related">
                                                                <label class="home_sp--ft ">
                                                                    <input type="radio" name="SelectTax<?php echo $keyparent; ?>" value="<?php echo $item->slug; ?>">
                                                                    <div class="home_sp--ft-bg">
                                                                        <p class="note-sm"><?php echo $item->name; ?></p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        <?php endforeach; ?>
                                                    </div>
                                                </div>
                                                <div class="swiper-scrollbar"></div>
                                            </div>
                                            <a class="btn" href="<?php echo $link_term; ?>"><span class="btn-text"><?php _e('Xem tất cả', 'monamedia') ?></span></a>
                                        </div>
                                        <div class="home_sp--bottom free-slide" data-aos="fade-up">
                                            <div class="sp_lq--list d-wrap">
                                                <div class="swiper mySwiper">
                                                    <div class="swiper-wrapper is-loading-group ProductSlideAjax<?php echo $keyparent; ?>">


                                                        <?php while ($QueryProduct->have_posts()) {
                                                            $QueryProduct->the_post(); ?>
                                                            <div class="swiper-slide d-item d-4">
                                                                <div class="sp_lq--item">

                                                                    <?php echo get_template_part('partials/product/ItemProduct'); ?>

                                                                </div>
                                                            </div>
                                                        <?php }
                                                        wp_reset_query($QueryProduct); ?>


                                                    </div>
                                                </div>
                                                <div class="box-napa">
                                                    <div class="box-napa-wrap">
                                                        <div class="btn-navi prev"> <i class="fas fa-chevron-left"></i></div>
                                                        <div class="swiper-pagination"> </div>
                                                        <div class="btn-navi next"> <i class="fas fa-chevron-right"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <?php };
                    if ($keyparent == 1) break;
                endforeach;
            endif; ?>

            <?php
            $title_sc6          = $mona_sc6_group['title'];
            $content_sc6        = $mona_sc6_group['content'];
            $select_sc6         = $mona_sc6_group['select'];
            $relationship_sc6   = $mona_sc6_group['relationship'];

            $PostServe     = [
                'post_type'         => 'posttype_serve',
                'post_status'       => 'publish',
                'posts_per_page'    => $count,
            ];

            if ($select_sc6 == '2') {
                $PostServe['orderby']    = 'post__in';
                $PostServe['post__in']   = $relationship_sc6;
            }

            $QueryPostServe = new WP_Query($PostServe);
            if ($QueryPostServe->have_posts()) { ?>
                <div class="home_ser">
                    <div class="container">
                        <div class="home_ser--wrap">
                            <div class="home_ser--title">
                                <h2 class="title-main" data-aos="fade-up"><?php echo $title_sc6; ?></h2>
                                <p class="note-text" data-aos="fade-up"><?php echo $content_sc6; ?></p>
                            </div>
                            <div class="home_ser--list d-wrap">

                                <?php while ($QueryPostServe->have_posts()) {
                                    $QueryPostServe->the_post(); ?>
                                    <div class="home_ser--item d-item d-3" data-aos="zoom-in">

                                        <?php echo get_template_part('partials/post/ItemPostServe'); ?>

                                    </div>
                                <?php }
                                wp_reset_query($QueryPostServe); ?>

                            </div>
                        </div>
                    </div>
                </div>
            <?php }; ?>

            <?php
            $SelectPost         =  $mona_sc2_group['select'];
            $RelationshiptPost  =  $mona_sc2_group['relationship'];
            $title_sc2          =  $mona_sc2_group['title'];
            $content_sc2        =  $mona_sc2_group['content'];

            $Post     = [
                'post_type'         => 'posttype_cong_trinh',
                'post_status'       => 'publish',
                'posts_per_page'    => $count,
            ];

            if ($SelectPost == '2') {
                $Post['orderby']    = 'post__in';
                $Post['post__in']   = $RelationshiptPost;
            }

            $QueryPost = new WP_Query($Post);
            if ($QueryPost->have_posts()) { ?>
                <div class="home_nb">
                    <div class="container">
                        <div class="home_nb--wrap">
                            <div class="home_ser--title">
                                <h2 class="title-main" data-aos="fade-up"><?php echo $title_sc2; ?></h2>
                                <p class="note-text" data-aos="fade-up"><?php echo $content_sc2; ?></p>
                            </div>
                            <div class="home_nb--list" data-aos="zoom-in">
                                <div class="swiper mySwiper">
                                    <div class="swiper-wrapper">

                                        <?php while ($QueryPost->have_posts()) {
                                            $QueryPost->the_post(); ?>

                                            <div class="swiper-slide">

                                                <?php echo get_template_part('partials/post/ItemPostBuildingPageHome'); ?>

                                            </div>
                                        <?php }
                                        wp_reset_query($QueryPost); ?>

                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                                <div class="box-navi">
                                    <div class="btn-navi prev"> <i class="fas fa-angle-left"></i></div>
                                    <div class="btn-navi next"> <i class="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php }; ?>


            <?php echo get_template_part('partials/global/Customer'); ?>

            <?php
            $SelectPost_sc3         =  $mona_sc3_group['select'];
            $RelationshiptPost_sc3  =  $mona_sc3_group['relationship'];
            $title_sc3              =  $mona_sc3_group['title'];
            $link_sc3               =  $mona_sc3_group['link'];

            $Post     = [
                'post_type'         => 'post',
                'post_status'       => 'publish',
                'posts_per_page'    => $count,
            ];

            if ($SelectPost_sc3 == '2') {
                $Post['orderby']    = 'post__in';
                $Post['post__in']   = $RelationshiptPost_sc3;
            }

            $QueryPost = new WP_Query($Post);
            if ($QueryPost->have_posts()) { ?>
                <div class="home_new free-slide">
                    <div class="container">
                        <div class="home_new--wrap">
                            <h2 class="title-main" data-aos="fade-up"><?php echo $title_sc3; ?></h2>
                            <div class="home_new--box" data-aos="fade-up">
                                <div class="home_new--list d-wrap">
                                    <div class="swiper mySwiper">
                                        <div class="swiper-wrapper">

                                            <?php while ($QueryPost->have_posts()) {
                                                $QueryPost->the_post(); ?>
                                                <div class="swiper-slide d-item d-4">
                                                    <div class="home_new--item">

                                                        <?php echo get_template_part('partials/post/ItemPost') ?>

                                                    </div>
                                                </div>
                                            <?php }
                                            wp_reset_query($QueryPost); ?>

                                        </div>
                                    </div>
                                    <div class="swiper-pagination custom"></div>
                                </div><a class="btn" href="<?php echo $link_sc3; ?>"><span class="btn-text"><?php _e('Xem thêm', 'monamedia') ?></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php }; ?>

        </form>

        <?php echo get_template_part('partials/global/ContactHome'); ?>


    </main>
<?php
endwhile;
get_footer();
