<?php

/**
 * The template for displaying header.
 *
 * @package MONA.Media / Website
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
    <!-- Meta ================================================== -->
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <?php wp_site_icon(); ?>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>

    <?php wp_head(); ?>
</head>
<?php
if (wp_is_mobile()) {
    $body = 'mobile-detect';
} else {
    $body = 'desktop-detect';
}
$user = (is_user_logged_in()) ? wp_get_current_user() : false;

$class = $user ? 'success-hd' : '';
if (!is_singular('post')  && !is_home() && !is_page(MONA_PAGE_CONTACT))
    $class .= ' no-bn';
?>

<body <?php body_class($body); ?>>
    <header class="header <?php echo $class ?>">
        <div class="header-wrap">
            <?php if (!empty($bn = get_field('mona_header_banner', 'option'))) { ?>
                <div class="header-bg">
                    <a class="header-bn" href="<?php echo !empty($img = get_field('mona_header_url', 'option')) ? $img : 'javascript:;' ?>">
                        <?php echo wp_get_attachment_image($bn, 'full') ?>
                    </a>
                </div>
            <?php
            }
            ?>
            <div class="header-top">
                <div class="container">
                    <div class="header-top-wrap">
                        <div class="header-top-lf">
                            <div class="header-mobi btn-mobi">
                                <span class="line"></span>
                                <span class="line"></span>
                                <span class="line"></span>
                            </div>
                            <div class="header-search">
                                <div class="header-search-wrap">
                                    <span class="header-search-ic open btn-search">
                                        <img src="<?php echo MONA_SITE_TEMPLATE ?>/assets/images/SearchBtn.svg" alt="" />
                                    </span>
                                    <span class="header-search-ic close btn-search-exit">
                                        <img src="<?php echo MONA_SITE_TEMPLATE ?>/assets/images/SearchEx.svg" alt="" />
                                    </span>
                                    <?php
                                    if (!wp_is_mobile()) {
                                        get_search_form();
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="header-lang">
                                <ul class="header-lang-list">
                                    <li class="header-lang-item actived">
                                        <a class="header-lang-link" href="">VN</a>
                                    </li>
                                    <li class="header-lang-item">
                                        <a class="header-lang-link" href="">EN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <?php echo get_custom_logo() ?>
                        <div class="header-top-rt">
                            <div class="header-box">
                                <div class="header-login">
                                    <div class="header-btn">
                                        <?php if (!is_user_logged_in()) { ?>
                                            <a class="note-text fw-6 cl-black2" href="<?php echo get_permalink(MONA_PAGE_LOGIN) . '?redirect=' . get_permalink(MONA_PAGE_ACCOUNT) . '?tab=noti'; ?>">
                                                <?php echo __('Nhận bản tin', 'monamedia'); ?>
                                            </a>
                                        <?php } else { ?>
                                            <a class="note-text fw-6 cl-black2" href="<?php echo get_permalink(MONA_PAGE_ACCOUNT) . '?tab=noti'; ?>">
                                                <?php echo __('Nhận bản tin', 'monamedia'); ?>
                                            </a>
                                        <?php } ?>
                                        <a class="note-text fw-6 cl-black2 dn" href="<?php echo get_permalink(MONA_PAGE_LOGIN) ?>"><?php echo __('Đăng nhập', 'monamedia'); ?>
                                        </a>
                                        <a class="btn dk" href="<?php echo get_permalink(MONA_PAGE_REGISTER) ?>">
                                            <div class="btn-text"><?php echo __('Đăng ký ngay', 'monamedia'); ?></div>
                                        </a>
                                    </div>
                                    <?php
                                    get_template_part('partials/global/header-login', null, [
                                        'user' => $user
                                    ]);
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="header-bottom-wrap">
                        <div class="header-mobi btn-mobi">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                        <div class="header-nav">
                            <?php
                            if (has_nav_menu('primary-menu')) {
                                wp_nav_menu(array(
                                    'container' => false,
                                    'container_class' => '',
                                    'menu_class' => 'menu-list',
                                    'theme_location' => 'primary-menu',
                                    'walker' => new Mona_Walker_Nav_Menu,
                                ));
                            }
                            ?>
                        </div>
                        <div class="header-lang">
                            <ul class="header-lang-list">
                                <li class="header-lang-item actived">
                                    <a class="header-lang-link" href="">VN</a>
                                </li>
                                <li class="header-lang-item">
                                    <a class="header-lang-link" href="">EN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="menu-mb">
        <div class="menu-mb-ex">
            <i class="far fa-times"></i>
        </div>
        <div class="menu-mb-wrap">
            <div class="menu-mb-top">
                <?php
                get_template_part('partials/global/header-login', null, ['user' => $user])
                ?>
                <div class="menu-mb-search">
                    <?php
                    if (wp_is_mobile()) {
                        get_search_form();
                    }
                    ?>
                </div>
                <?php
                if (has_nav_menu('sidebars-menu')) {
                    wp_nav_menu(array(
                        'container' => false,
                        'container_class' => '',
                        'menu_class' => '',
                        'theme_location' => 'sidebars-menu',
                        'walker' => new Mona_Walker_Nav_Menu,
                    ));
                }
                ?>
            </div>
            <div class="menu-mb-bottom">
                <a class="note-lg" href="<?php echo wp_logout_url(home_url()); ?>"><?php echo __('Đăng xuất', 'monamedia'); ?></a>
            </div>
        </div>
    </div>
    <div class="menu-modal"></div>
    <?php
    update_special_post_array(4);
    ?>