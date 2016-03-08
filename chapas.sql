-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2016 a las 20:56:47
-- Versión del servidor: 5.5.32
-- Versión de PHP: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `chapas`
--
CREATE DATABASE IF NOT EXISTS `chapas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci;
USE `chapas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_categorias`
--

CREATE TABLE IF NOT EXISTS `t_categorias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `t_categorias`
--

INSERT INTO `t_categorias` (`id`, `nombre`) VALUES
(1, 'Entretenimiento'),
(2, 'Salud'),
(3, 'Comida'),
(4, 'Productos'),
(5, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_cupon`
--

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `t_cupon`
--

INSERT INTO `t_cupon` (`id`, `id_negocio`, `id_categoria`, `nombre`, `porcentaje`, `monto`, `fecha_pub`, `fecha_exp`, `destacado`, `imagen`) VALUES
(1, 1, 1, 'Juan Sanchez | Lo que el feisbuk se llevo', 10, 15.00, '2016-03-07', '2016-03-31', 1, 'show1.jpg'),
(2, 1, 1, 'Andy Amable & Luis Melgar | MACHOS AL PODER', 10, 15.00, '2016-03-07', '2016-03-31', 0, 'show2.jpg'),
(3, 1, 1, 'Carla Torres | Detectora de Zorras', 10, 15.00, '2016-03-07', '2016-03-30', 0, 'show3.jpg'),
(4, 1, 1, 'Guerra de Sexos', 10, 15.00, '2016-03-07', '2016-03-30', 0, 'show4.jpg'),
(6, 1, 2, 'Vacio', 0, 0.00, '2016-03-07', '2016-03-30', 0, 'salud.jpg'),
(7, 1, 3, 'Vacio', 0, 0.00, '2016-03-07', '2016-03-31', 0, 'comida.jpg'),
(8, 1, 4, 'Vacio', 0, 0.00, '2016-03-07', '2016-03-30', 0, 'productos.jpg'),
(9, 1, 5, 'Vacio', 0, 0.00, '2016-03-07', '2016-03-30', 0, 'otros.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_negocios`
--

CREATE TABLE IF NOT EXISTS `t_negocios` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `nombre` tinytext COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `t_negocios`
--

INSERT INTO `t_negocios` (`id`, `id_usuario`, `nombre`) VALUES
(1, 2, 'Principal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_usuarios`
--

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `t_usuarios`
--

INSERT INTO `t_usuarios` (`id`, `nombres`, `apellidos`, `fecha`, `email`, `clave`, `login`, `nivel`) VALUES
(3, '', '', '0000-00-00', 'joezer.newman@gmail.com', '', '2016-03-07 16:42:30', 3),
(2, 'Panel', 'Admin', '1989-01-30', 'info@chapchapa.com.pe', '21232f297a57a5a743894a0e4a801fc3', '2016-03-07 12:32:26', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
