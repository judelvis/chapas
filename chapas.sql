-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.5.47-0ubuntu0.14.04.1 - (Ubuntu)
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla chapas.t_categorias
CREATE TABLE IF NOT EXISTS `t_categorias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla chapas.t_categorias: 0 rows
/*!40000 ALTER TABLE `t_categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_categorias` ENABLE KEYS */;


-- Volcando estructura para tabla chapas.t_cupon
CREATE TABLE IF NOT EXISTS `t_cupon` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `id_negocio` tinyint(4) NOT NULL,
  `id_categoria` tinyint(4) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish_ci NOT NULL,
  `porcentaje` int(6) NOT NULL,
  `monto` float(9,2) NOT NULL,
  `fecha_pub` date NOT NULL,
  `fecha_exp` date NOT NULL,
  `destacado` int(11) NOT NULL DEFAULT '0',
  `imagen` text COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla chapas.t_cupon: 0 rows
/*!40000 ALTER TABLE `t_cupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_cupon` ENABLE KEYS */;


-- Volcando estructura para tabla chapas.t_negocios
CREATE TABLE IF NOT EXISTS `t_negocios` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `nombre` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla chapas.t_negocios: 0 rows
/*!40000 ALTER TABLE `t_negocios` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_negocios` ENABLE KEYS */;


-- Volcando estructura para tabla chapas.t_usuarios
CREATE TABLE IF NOT EXISTS `t_usuarios` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `nombres` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `email` varchar(80) COLLATE utf8mb4_spanish_ci NOT NULL,
  `clave` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  `login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nivel` tinyint(2) NOT NULL COMMENT '1:Admin | 2:Socio | 3:Cliente',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla chapas.t_usuarios: 0 rows
/*!40000 ALTER TABLE `t_usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_usuarios` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
