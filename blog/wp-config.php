<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/var/www/vhosts/40513824.servicio-online.net/liberam.es/blog/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', '9644672_wp_04imo' );

/** Database username */
define( 'DB_USER', 'wp_hh5mc' );

/** Database password */
define( 'DB_PASSWORD', 'ff6Wq$C2TZE7&?N7' );

/** Database hostname */
define( 'DB_HOST', 'PMYSQL167.dns-servicio.com:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 's_cwC0uEu/+7I&*Y3cwIQW028XwHW(4w|7lAvlB6w:ws-TkFE%(![#:gT2dOeU&!');
define('SECURE_AUTH_KEY', '*d*KI70|7&!73If%agMZh)J3eG3Uz3g6:R4w6810u9y2E_0OC8]%[cee5![K##5f');
define('LOGGED_IN_KEY', '2xQ7y~q1f1+;*1(s[~M:9(96%5apZIp17a@oZ9cI#7;93p6#UO529fHQ0H1o77;3');
define('NONCE_KEY', 'T1B#(2|)4*:@3xD-F55|]SlBk/M&2+ym%25/~rl&]!W*q|3(4e--2X@X@odbe*c/');
define('AUTH_SALT', ':SGRyZ/1_&S~yClek%a&8%@pa;8~-i2dArX68c9f_L27c8vRmuqu63T&#XoIJ;-9');
define('SECURE_AUTH_SALT', 'HB#b*Z1|C!#9@1WZb7MF76dgbT1e88_g1o:W#h/dK531d5B807-h_)28(5(fQ#7)');
define('LOGGED_IN_SALT', 'lNHp6%n5Z(68A89zuzFT7&wUO*yLG_P(#62QI1A@f[yr-%ia+G9jR|Ei:[/Qod0n');
define('NONCE_SALT', '5&-H7lA_68CM2d:gLbXc[W]i|b67;5V324On7_R4%_D&)[HS/t7TS1X/t6-5SVIg');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ryjR5j4_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
