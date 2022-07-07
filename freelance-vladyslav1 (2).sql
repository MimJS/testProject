-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 06 2022 г., 23:58
-- Версия сервера: 5.7.33-log
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `freelance-vladyslav1`
--

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `photo` mediumtext NOT NULL,
  `name` varchar(255) NOT NULL,
  `date` bigint(20) NOT NULL,
  `description` mediumtext NOT NULL,
  `createdDate` bigint(20) NOT NULL,
  `author_login` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `eventType` varchar(3) NOT NULL,
  `projectBase` varchar(3) NOT NULL,
  `isModer` int(1) NOT NULL DEFAULT '0',
  `dateEnd` bigint(20) NOT NULL,
  `timeStart` bigint(20) DEFAULT NULL,
  `hasMinted` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`id`, `author`, `photo`, `name`, `date`, `description`, `createdDate`, `author_login`, `source`, `twitter`, `eventType`, `projectBase`, `isModer`, `dateEnd`, `timeStart`, `hasMinted`) VALUES
(28, '1', 'https://i.ibb.co/SJtSs4X/3840x2160-1506825-www-Art-File-ru.jpg', '1', 1656968399058, '1', 1656951001966, 'test', '1', '1', 'irl', 'sol', 0, 1656968399058, 1656936900000, ''),
(29, '123', 'https://i.ibb.co/6nDmnt6/kod-programmirovanie-simvoly-147674-1920x1080.jpg', '123', 1656968399058, '123', 1656955216107, 'test', '123', '123', 'ama', 'sol', 0, 1657054799058, 1656940440000, 'yes'),
(30, 'Ethereum (ETH)', 'https://i.ibb.co/KNH93NX/image.jpg', 'Конференция ETHCC 5', 1657832399058, '«Конференция сообщества Ethereum (EthCC) — крупнейшее ежегодное европейское мероприятие Ethereum, посвященное технологиям и сообществу…».', 1657018282609, 'metaoasisone', 'https://ethcc.io/', 'https://twitter.com/ethereum', 'ama', 'eth', 1, 1657832399058, 1657015200000, 'not relevant'),
(31, 'Okay Bears', 'https://i.ibb.co/r3JTtLz/FVi-Fu5-EUs-AA31t-V.jpg', 'Meet Bears', 1659041999058, 'Let’s kick back and unwind at #NFTNYC22 \n\nCheck in at The Park for full details ', 1657019016091, 'metaoasisone', 'https://twitter.com/okaybears/status/1538128635533529089', 'https://twitter.com/okaybears', 'ama', 'sol', 1, 1659041999058, 1657024200000, 'yes'),
(32, '34535', 'https://i.ibb.co/r3JTtLz/FVi-Fu5-EUs-AA31t-V.jpg', '35353', 1658437199058, '353535', 1657019287257, 'metaoasisone', '353535', '35353', 'irl', 'eth', 1, 1658437199058, 1656968400000, 'yes'),
(33, '7878787', 'https://i.ibb.co/r3JTtLz/FVi-Fu5-EUs-AA31t-V.jpg', '7878787', 1659041999058, '878787878', 1657019315263, 'metaoasisone', '877878', '7878787887', 'irl', 'eth', 1, 1659041999058, 1657026960000, 'no'),
(35, '22', 'https://i.ibb.co/cr23fMZ/k-TZ-qm-KWf4-Z4kj-THPAGgfp-WLYFIURBr-EU1is-KJCHa-TBNb8utpb-Wj2-RDDy-JPTc-BRc1f-Dv-De-n-Q3-Qty4-b-UL1.jpg', '222', 1657151999058, '2', 1657119426521, 'test', '1', '1', 'ama', 'sol', 1, 1657756799058, 1657120380000, 'yes'),
(36, '1', '1', '1', 1657238399058, '1', 1657119934813, 'test', '1', '1', 'ama', 'sol', 1, 1657756799058, 1657120620000, 'yes');

-- --------------------------------------------------------

--
-- Структура таблицы `technical`
--

CREATE TABLE `technical` (
  `id` int(11) NOT NULL,
  `value` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `technical`
--

INSERT INTO `technical` (`id`, `value`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `preferIds` text NOT NULL,
  `createdDate` bigint(20) NOT NULL,
  `isAdmin` int(1) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT '',
  `surname` varchar(255) DEFAULT '',
  `nickname` varchar(255) NOT NULL,
  `projectPresent` varchar(255) DEFAULT '',
  `public_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `mail`, `password`, `token`, `preferIds`, `createdDate`, `isAdmin`, `name`, `surname`, `nickname`, `projectPresent`, `public_mail`) VALUES
(13, 'test', 'test@test.ru', '098f6bcd4621d373cade4e832627b4f6', 'T7gpsx62jbIGEwhx3V7KgEXdNq9aIcp0yxN5oipYZieFimPd6rSBUEm4jZracgBlZp7uYgRp59hDu3dGbdyaSEMwDeoHrlcJCMq1XkjlGoHnMNBTy60gByaCYKJJr0hA', '[1,23,25,28,29,33,31]', 1656845177901, 1, '123', '123', '1234', '123', '123@123.123.ru'),
(14, 'test2', 'test2@mail.ru', '568f08cfddf69b4d16923226c7ec4a79', '6GIegpxVPzIpGAL0y6AXT7uRtuNR5Z5ZUJ0sV9G9U9n3gkEKhJmYdnqVWevHq19x1H3wu5wgIBBleESqsCljdTJcTlEbcwLXjBPoASeY6Jy0DXO7ZoXefRhmtOhTfZO0', '[]', 1656870748769, 0, NULL, NULL, '', NULL, ''),
(15, 'test3', 'test3@test.ru', '7cd369b15b33cf0d18e3130e67731bc2', '8zNrzGQHJW6Yk6ys1DK4nqr41x5leByCHNqRvmn2WhFYxf1CpJ1ClXbIxDOqrRwoy7oFXqCp4ZyL1sQ4Psnbu72pKJdmnU5lxVOFPecQAfXTYIGLTAL8QSZD4ZzTvIaV', '[]', 1656914342723, 0, 'test112', 'test112', 'idNaN', 'test112', 'test112@rere.re'),
(16, 'q', 'q@q.qq', '078b185d9098c698118aa80ac21ad44f', 'JHr0abhA0ghik0IOMy1FGxq8ZPvRxOKMSzHV3xJfXg82VdwRGImjKnUESZ8QrRqQc8xk8uX6VSNbl0w1PoaPkbSbBRyP4lKbKunOfMlUZNjuJSxpQr3dTMfQPZ6ecQ9m', '[]', 1656914616681, 0, '', '', 'userNaN', '', 'q@q.qq'),
(17, '123', '123@123.re', 'd2d4d9c5fea9a1048d60e7cc05b11183', '7BGgKj2BKVy42A6LvGsaXwfi1tcivtxGce0SwWfnpb2e19tahhQHxYXyp4LujUaq9mULYBc8mWNkRAusMfdLHHrwgPEaTHKVoFOIA9fKTufOaCW3zhjsy55bJqtzwTsY', '[]', 1656914719366, 0, '', '', 'user17', '', '123@123.re'),
(18, 'metaoasisone', 'metaoasisone@gmail.com', 'cf79ae6addba60ad018347359bd144d2', 'PgkVfdJoPAwFt6eaQNi0edQkOz1PnhoYARHRK21Q02BSsnw8bf7mQaluTFG6zf0sRJ8GoUKUiO8tuUXozKtIUTk3uV47VwJY6PpAMAgwXEEtaalkXa9Vnp1OlGRvnsLx', '[31,33,30]', 1657018012744, 0, '', '', 'user18', '', 'metaoasisone@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `technical`
--
ALTER TABLE `technical`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT для таблицы `technical`
--
ALTER TABLE `technical`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
