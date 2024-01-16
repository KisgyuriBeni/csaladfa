-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 16. 11:35
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `csaladfa`
--
CREATE DATABASE IF NOT EXISTS `csaladfa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `csaladfa`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `csaladtagok`
--

CREATE TABLE `csaladtagok` (
  `id` int(5) NOT NULL,
  `nev` varchar(50) DEFAULT NULL,
  `szul_datum` varchar(20) DEFAULT NULL,
  `szul_hely` varchar(20) DEFAULT NULL,
  `anyja_neve` varchar(20) DEFAULT NULL,
  `apja_neve` varchar(20) DEFAULT NULL,
  `halal_hely` varchar(20) DEFAULT NULL,
  `halal_datum` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `csaladtagok`
--

INSERT INTO `csaladtagok` (`id`, `nev`, `szul_datum`, `szul_hely`, `anyja_neve`, `apja_neve`, `halal_hely`, `halal_datum`) VALUES
(0, 'Kiss Balint', '1990-01-01', 'Budapest', 'Rut Renata', 'Kiss Ervin', NULL, NULL),
(0, 'Kiss Ervin', '1965-05-15', 'Debrecen', 'Ferenci Melinda', 'Kiss Róbert', NULL, NULL),
(0, 'Rut Renata', '1978-09-20', 'Szeged', 'Babos Eszter', 'Rut Major', NULL, NULL),
(0, 'Kiss Róbert', '1945-11-08', 'Pécs', 'Anita Maria', 'Kiss David', '2016-02-15', 'Budapest'),
(0, 'Ferenci Melinda', '1949-07-03', 'Győr', 'Bodotsi Eszter', 'Ferenci Karoly', '2011-01-23', 'Győr'),
(0, 'Babos Eszter', '1939-04-25', 'Miskolc', 'Karabos Maria', 'Karoly Ferenc', '2010-12-15', 'Szeged'),
(0, 'Rut Major', '1942-12-18', 'Szombathely', 'Magyaros Bobita', 'Rut Robert', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
