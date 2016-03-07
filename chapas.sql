-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.46-0ubuntu0.14.04.2 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2016-03-06 22:34:35
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping structure for table chapas.t_categorias
DROP TABLE IF EXISTS `t_categorias`;
CREATE TABLE IF NOT EXISTS `t_categorias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Dumping data for table chapas.t_categorias: 5 rows
/*!40000 ALTER TABLE `t_categorias` DISABLE KEYS */;
INSERT INTO `t_categorias` (`id`, `nombre`) VALUES
	(1, 'Entretenimiento'),
	(2, 'Salud'),
	(3, 'Comida'),
	(4, 'Productos'),
	(5, 'Otros');
/*!40000 ALTER TABLE `t_categorias` ENABLE KEYS */;


-- Dumping structure for table chapas.t_cupon
DROP TABLE IF EXISTS `t_cupon`;
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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Dumping data for table chapas.t_cupon: 0 rows
/*!40000 ALTER TABLE `t_cupon` DISABLE KEYS */;
INSERT INTO `t_cupon` (`id`, `id_negocio`, `id_categoria`, `nombre`, `porcentaje`, `monto`, `fecha_pub`, `fecha_exp`, `destacado`, `imagen`) VALUES
	(1, 1, 1, 'cupon001', 6, 1200.00, '2016-03-05', '2016-03-15', 0, 'show1.jpg'),
	(2, 1, 2, 'cupon002', 6, 1200.00, '2016-03-07', '2016-03-26', 0, 'show2.jpg'),
	(3, 1, 3, 'cupon003', 6, 1200.00, '2016-03-05', '2016-03-16', 0, 'show3.jpg'),
	(4, 1, 4, 'cupon004', 6, 1200.00, '2016-03-05', '2016-03-26', 0, 'show4.jpg'),
	(5, 1, 5, 'cupon005', 6, 1200.00, '2016-03-07', '2016-04-06', 0, 'show1.jpg'),
	(6, 2, 1, 'cupon006', 6, 1200.00, '2016-03-05', '2016-05-06', 0, 'show2.jpg'),
	(7, 2, 2, 'cupon007', 6, 1200.00, '2016-03-05', '2016-06-06', 0, 'show3.jpg'),
	(8, 2, 3, 'cupon008', 6, 1200.00, '2016-03-05', '2016-03-07', 0, 'show4.jpg');
/*!40000 ALTER TABLE `t_cupon` ENABLE KEYS */;


-- Dumping structure for table chapas.t_negocios
DROP TABLE IF EXISTS `t_negocios`;
CREATE TABLE IF NOT EXISTS `t_negocios` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `nombre` tinytext COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Dumping data for table chapas.t_negocios: 2 rows
/*!40000 ALTER TABLE `t_negocios` DISABLE KEYS */;
INSERT INTO `t_negocios` (`id`, `id_usuario`, `nombre`) VALUES
	(1, 4, 'neg1'),
	(2, 4, 'neg2');
/*!40000 ALTER TABLE `t_negocios` ENABLE KEYS */;


-- Dumping structure for table chapas.t_usuarios
DROP TABLE IF EXISTS `t_usuarios`;
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
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Dumping data for table chapas.t_usuarios: 4 rows
/*!40000 ALTER TABLE `t_usuarios` DISABLE KEYS */;
INSERT INTO `t_usuarios` (`id`, `nombres`, `apellidos`, `fecha`, `email`, `clave`, `login`, `nivel`) VALUES
	(1, 'admin', 'admin', '2016-03-05', 'admin@gmail.com', '202cb962ac59075b964b07152d234b70', '2016-03-06 18:21:22', 1),
	(2, 'usu1', 'usu1', '2016-03-05', 'usu@gmail.com', '202cb962ac59075b964b07152d234b70', '2016-03-06 18:21:22', 3),
	(3, '', '', '0000-00-00', 'jud.prog@gmail.com', '202cb962ac59075b964b07152d234b70', '2016-03-06 18:49:45', 3),
	(4, 'soc1', 'soc1', '2016-03-05', 'soc@gmail.com', '202cb962ac59075b964b07152d234b70', '2016-03-06 18:49:49', 2),
	(5, '', '', '0000-00-00', 'jud.pog@gmail.com', '', '2016-03-06 19:38:42', 3),
	(6, '', '', '0000-00-00', 'jud.prog@gmai.com', '', '2016-03-06 19:51:47', 3),
	(7, '', '', '0000-00-00', 'jud.prog@gmail.', '', '2016-03-06 20:42:58', 3),
	(8, '', '', '0000-00-00', 'judelvis.sis@gmail.com', '', '2016-03-06 22:32:57', 3),
	(9, '', '', '0000-00-00', 'arge@gmail.com', '', '2016-03-06 22:34:16', 3);
/*!40000 ALTER TABLE `t_usuarios` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
