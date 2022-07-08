-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 07, 2022 at 04:01 PM
-- Server version: 10.8.3-MariaDB-1:10.8.3+maria~jammy
-- PHP Version: 8.0.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `author_id` int(11) NOT NULL,
  `date_created` varchar(10) NOT NULL,
  `date_modified` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `posts` (`id`, `title`, `excerpt`, `img`, `author_id`, `date_created`, `date_modified`) VALUES
(2, 'What is SaaS? Software as a Service Explained', 'Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some', 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 1, '04-04-2022', '04-12-2022'),
(3, 'A Quick Guide to WordPress Hosting', 'According to him, â€œI\'m still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film', 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 1, '04-04-2022', '04-12-2022'),
(4, '7 Promising VS Code Extensions Introduced in 2022', 'I hope I remembered all the stuff that they needed to know. They\'re like, \'okay,\' and write it in their little reading notebooks. I realized today that I have all this stuff that', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 1, '04-04-2022', '04-12-2022'),
(5, 'How to Use Root C++ Interpreter Shell to Write C++ Programs', 'The powerful gravity waves resulting from the impact of the planets\' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the', 'https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 2, '04-05-2022', '04-06-2022');
