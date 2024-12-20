<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ezyro_37883944_646' );   // Nom exact de la base de données
define( 'DB_USER', 'root' );                  // Nom d'utilisateur pour XAMPP (par défaut : root)
define( 'DB_PASSWORD', '' );                  // Mot de passe vide par défaut sous XAMPP
define( 'DB_HOST', 'localhost' );             // Hôte local pour XAMPP (localhost)
define( 'DB_CHARSET', 'utf8mb4' );            // Charset (ne changez pas)
define( 'DB_COLLATE', '' );                   // Collation (ne changez pas)


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
define( 'AUTH_KEY',         'z2r0jrcggfil8rz8ix7nft7yy3mbjm3tu1w2bsrs2s9n5q4bo7vxxddljfhkmfgi' );
define( 'SECURE_AUTH_KEY',  'uql03blfwdq5efriwiyqfmtcx92rpgraijgpwj6jpbjhlx9lxiphcewy8yexlhfm' );
define( 'LOGGED_IN_KEY',    'jmqj178e0ktcsdfimzckase1gmsqx3be98x5vi7rgfciqfyrzgwebbfwtvisl6tl' );
define( 'NONCE_KEY',        'pgvd2upnxzpqcdoziifly0we2fk4hi3zznjrubdhp5kvwz1b0ygfvy5q4loixxoc' );
define( 'AUTH_SALT',        'y5ngqdywuhfnbmuvfvskzk0zwby0ofy4diztk3phz36y13icu1tl6gjpkfrdppsd' );
define( 'SECURE_AUTH_SALT', 'yqwdmks7yku8u6o1lvbwynskau3jh9bvmcm0rd0eksjsjuqfrxnvqrjltbw3zztk' );
define( 'LOGGED_IN_SALT',   'ikrfofpa0fhihiqkkq4wm2w09q1jagxhpmssen3dxp8jrsoti6ph7ln4yp3vpqny' );
define( 'NONCE_SALT',       'zcgxcqzdz086snbtdz8rcbrg6vimcrcetsf643umfk9tvorroumalx5pu0pybm46' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpvb_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
