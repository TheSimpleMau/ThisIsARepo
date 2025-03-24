-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-03-2025 a las 16:21:18
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ThisIsARepoDB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Blog`
--

CREATE TABLE `Blog` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Blog`
--

INSERT INTO `Blog` (`id`, `title`, `content`, `date`) VALUES
(5, 'Hola', 'Esta es la primera entrada del blog :D', '2025-03-16 08:20:10'),
(6, 'Otro test', 'Esta es otra publicación de test', '2025-03-16 08:36:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Has`
--

CREATE TABLE `Has` (
  `idUser` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Posee`
--

CREATE TABLE `Posee` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Privilegios`
--

CREATE TABLE `Privilegios` (
  `id` int(11) NOT NULL,
  `route` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `role` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `date`) VALUES
(1, 'Mauricio', '$2b$12$ZSHBao55XQ/XPVKDU5DuDOm39lqj/kZuKiVJAOo2v/JQviKVZNUNC', '2025-03-16'),
(2, 'Pepito', '$2b$12$Pj1UwO69uiw3.bAwlmSWQuKCauhOPxuEwMmTDptBSYnJRr8xkDB1i', '2025-03-16'),
(3, 'Marco', '$2b$12$P.j/aNIsqV5mJ9PAHMyNDOlVLEva.0ggsnfWA0Eh5zy8cavvWgF4W', '2025-03-16'),
(4, 'Edmundo', '$2b$12$6LEY4cVEWtopEB1FfjgBFeQph3ScEkFhft.mNdHUePVTS7iFIwgVu', '2025-03-16'),
(5, 'Lalo', '$2b$12$vzOWDycKztyeOVCol9LZxe.mWK4RFVjzO5WC16VW2dPJSd4JsY41a', '2025-03-16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Blog`
--
ALTER TABLE `Blog`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Has`
--
ALTER TABLE `Has`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `has_ibfk_2` (`idRol`);

--
-- Indices de la tabla `Posee`
--
ALTER TABLE `Posee`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

--
-- Indices de la tabla `Privilegios`
--
ALTER TABLE `Privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Blog`
--
ALTER TABLE `Blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `Privilegios`
--
ALTER TABLE `Privilegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Has`
--
ALTER TABLE `Has`
  ADD CONSTRAINT `has_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `Users` (`id`);

--
-- Filtros para la tabla `Posee`
--
ALTER TABLE `Posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `Roles` (`id`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`idPrivilegio`) REFERENCES `Privilegios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
