/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 100014
Source Host           : localhost:3306
Source Database       : mylife

Target Server Type    : MYSQL
Target Server Version : 100014
File Encoding         : 65001

Date: 2017-04-10 17:43:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for emp
-- ----------------------------
DROP TABLE IF EXISTS `emp`;
CREATE TABLE `emp` (
  `empno` decimal(4,0) NOT NULL,
  `ename` varchar(10) DEFAULT NULL,
  `job` varchar(10) DEFAULT NULL,
  `mgr` decimal(4,0) DEFAULT NULL,
  `hiredate` date DEFAULT NULL,
  `sal` decimal(7,2) DEFAULT NULL,
  `comm` decimal(7,2) DEFAULT NULL,
  `depno` decimal(4,0) DEFAULT NULL,
  PRIMARY KEY (`empno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of emp
-- ----------------------------
INSERT INTO `emp` VALUES ('7369', 'smith', 'clerk', '7902', '1980-12-17', '800.00', null, '20');
INSERT INTO `emp` VALUES ('7499', 'alien', 'salesman', '7698', '1981-02-20', '1600.00', '300.00', '30');
INSERT INTO `emp` VALUES ('7521', 'ward', 'salesman', '7698', '1981-02-22', '1250.00', '500.00', '30');
INSERT INTO `emp` VALUES ('7566', 'jones', 'manager', '7839', '1981-04-02', '2975.00', null, '20');
INSERT INTO `emp` VALUES ('7654', 'martin', 'salesman', '7698', '1981-09-28', '1250.00', '1400.00', '30');
INSERT INTO `emp` VALUES ('7698', 'blake', 'manager', '7839', '1981-05-01', '2850.00', null, '30');
INSERT INTO `emp` VALUES ('7782', 'clark', 'manager', '7839', '1981-06-09', '2450.00', null, '10');
INSERT INTO `emp` VALUES ('7839', 'king', 'president', null, '1981-11-17', '5000.00', null, '10');
INSERT INTO `emp` VALUES ('7844', 'turner', 'salesman', '7698', '1981-09-08', '1500.00', '0.00', '30');
INSERT INTO `emp` VALUES ('7900', 'jams', 'clerk', '7698', '1981-12-03', '950.00', null, '30');
INSERT INTO `emp` VALUES ('7902', 'ford', 'analyst', '7566', '1981-12-03', '3000.00', null, '20');
INSERT INTO `emp` VALUES ('7934', 'miller', 'clerk', '7782', '1982-01-23', '1300.00', null, '10');

-- ----------------------------
-- Table structure for mycarlist
-- ----------------------------
DROP TABLE IF EXISTS `mycarlist`;
CREATE TABLE `mycarlist` (
  `userid` int(11) NOT NULL,
  `goodsid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mycarlist
-- ----------------------------
INSERT INTO `mycarlist` VALUES ('1', '2');
INSERT INTO `mycarlist` VALUES ('1', '2');
INSERT INTO `mycarlist` VALUES ('1', '2');

-- ----------------------------
-- Table structure for mylist
-- ----------------------------
DROP TABLE IF EXISTS `mylist`;
CREATE TABLE `mylist` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `goodsid` int(4) unsigned NOT NULL,
  `price` float NOT NULL,
  `img` varchar(100) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `commen` int(11) DEFAULT NULL,
  `simg1` varchar(100) DEFAULT NULL,
  `simg2` varchar(100) DEFAULT NULL,
  `simg3` varchar(100) DEFAULT NULL,
  `simg4` varchar(100) DEFAULT NULL,
  `introduce` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mylist
-- ----------------------------
INSERT INTO `mylist` VALUES ('1', '1000', '49.8', '../images/list2.jpg', '自营', '康恩贝天然维生素E', '185', '../images/list2-1big.jpg', '../images/list2-2big.jpg', '../images/list2-1big.jpg', '../images/list2-3big.jpg', '去黄褐斑，美容养颜，延缓衰老，1瓶约3个月量，可滴在乳液中滋润肌肤，可DIY面膜，内服美容外敷滋润');
INSERT INTO `mylist` VALUES ('2', '1001', '49', '../images/list3.jpg', '商家', '康恩贝天然维生素E', '55', '../images/list3-1big.jpg', '../images/list3-2big.jpg', '../images/list3-3big.jpg', '../images/list3-4big.jpg', '去黄褐斑，美容养颜，延缓衰老，1瓶约3个月量');
INSERT INTO `mylist` VALUES ('3', '1002', '13.8', '../images/list4.jpg', '自营', '新昌维生素E胶囊100mg*30粒*3件', '28', '../images/list4-1big.jpg', '../images/list4-2big.jpg', '../images/list4-3big.jpg', '../images/list4-4big.jpg', '可DIY面膜，内服美容外敷滋润');
INSERT INTO `mylist` VALUES ('4', '1003', '85', '../images/list5.jpg', '商家', '【买一送一】养生堂天然维生素E', '367', '../images/list5-1big.jpg', '../images/list5-2big.jpg', '../images/list5-3big.jpg', '../images/list5-4big.jpg', '去黄褐斑，美容养颜，延缓衰老，1瓶约3个月量，可滴在乳液中滋润肌肤，可DIY面膜，内服美容外敷滋润');
INSERT INTO `mylist` VALUES ('5', '1004', '69', '../images/list6.jpg', '商家', '汤臣倍键天然维生素E', '76', '../images/list6-1big.jpg', '../images/list6-2big.jpg', '../images/list6-3big.jpg', '../images/list6-1big.jpg', '此款发2瓶促销装 共2瓶共120粒 ve维E维他命E 外用痘印滋润睫毛脂肪粒天然内服成人女性或中老年非祛斑美白祛痘胶囊');
INSERT INTO `mylist` VALUES ('6', '1005', '85', '../images/list7.jpg', '商家', '【买一送一】养生堂', '12', '../images/list5-1big.jpg', '../images/list5-2big.jpg', '../images/list5-3big.jpg', '../images/list5-4big.jpg', '去黄褐斑，美容养颜，延缓衰老，1瓶约3个月量，可滴在乳液中滋润肌肤，可DIY面膜，内服美容外敷滋润');
INSERT INTO `mylist` VALUES ('7', '1006', '85', '../images/list8.jpg', '商家', '【买一送胶原蛋白】养生堂', '27', '../images/list7-1big.jpg', '../images/list7-2big.jpg', '../images/list7-3big.jpg', '../images/list7-4big.jpg', '买1送绿健园葡萄籽胶原蛋白片 买2送养生堂天然维生素E软胶囊120粒 17年9月到期 增强免疫力 抗氧化');
INSERT INTO `mylist` VALUES ('8', '1007', '198', '../images/list9.jpg', '商家', '金奥利牌葡萄籽', '284', '../images/list8-1big.jpg', '../images/list8-1big.jpg', '../images/list8-1big.jpg', '../images/list8-1big.jpg', '此商品没有介绍');
INSERT INTO `mylist` VALUES ('9', '1008', '198', '../images/list10.jpg', '商家', '修正 天然维生素E软胶囊 400mg/粒*60粒*2瓶', '66', '../images/list9-1big.jpg', '../images/list9-1big.jpg', '../images/list9-1big.jpg', '../images/list9-1big.jpg', '三个月一个周期  按周期购买服用');
INSERT INTO `mylist` VALUES ('10', '1009', '198', '../images/list11.jpg', '海外购', '普丽普莱维生素E软胶囊 100粒维E ve美国原装进口', '127', '../images/list10-1big.jpg', '../images/list10-2big.jpg', '../images/list10-3big.jpg', '../images/list10-4big.jpg', '产品保税仓隐私发货，包税包邮，原装正品保证，原料维生素E适合腿抽筋和手足僵硬，延缓衰老，冠心病，皮肤病者');
INSERT INTO `mylist` VALUES ('11', '1010', '59', '../images/list12.jpg', '商家', '修正 天然维生素E软胶囊 400mg/粒*60粒', '0', '../images/list11-1big.jpg', '../images/list11-1big.jpg', '../images/list11-1big.jpg', '../images/list11-1big.jpg', '买3送1送原品 买5送2送原品 修正集团出品 3个月1周期 建议按照周期购买');
INSERT INTO `mylist` VALUES ('12', '1011', '68', '../images/list13.jpg', '商家', '汤臣倍健 天然维生素E软胶囊 0.5g*60粒', '1', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('13', '1012', '28', '../images/list14.jpg', '商家', '皇健皇 天然维生素E软胶囊60粒 赠60粒VC片', '36', '../images/list13-1big.jpg', '../images/list13-2big.jpg', '../images/list13-3big.jpg', '../images/list13-4big.jpg', '买2送芦荟');
INSERT INTO `mylist` VALUES ('14', '1013', '78', '../images/list15.jpg', '商家', '绿健园牌天然维生素E软胶囊 ve 买一送一', '1', '../images/list14-1big.jpg', '../images/list14-2big.jpg', '../images/list14-3big.jpg', '../images/list14-4big.jpg', '天然维生素E软胶囊');
INSERT INTO `mylist` VALUES ('15', '1014', '99', '../images/list16.jpg', '自营', '美澳健 天然维生素E软胶囊 500mg*100粒', '55', '../images/list15-1big.jpg', '../images/list15-2big.jpg', '../images/list15-1big.jpg', '../images/list15-2big.jpg', '补充维生素E 进口天然VE原料 每日1次 每次1粒');
INSERT INTO `mylist` VALUES ('16', '1015', '55', '../images/list17.jpg', '自营', 'Dr．Herbs/禾博士 健佰牌天然维生素E软胶囊 ', '12', '../images/list16-1big.jpg', '../images/list16-2big.jpg', '../images/list16-1big.jpg', '../images/list16-2big.jpg', '此商品暂无介绍');
INSERT INTO `mylist` VALUES ('17', '1016', '888', '../images/list18.jpg', '自营', '胶原蛋白天然维生素E片 750mg*60片', '18', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('18', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('19', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('20', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('21', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('22', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('23', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('24', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('25', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('26', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('27', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('28', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('29', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('30', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('31', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('32', '1016', '75', '../images/list18.jpg', '自营', '汤臣倍键胶原蛋白', '5', '../images/list18-1big.jpg', '../images/list18-2big.jpg', '../images/list18-3big.jpg', '../images/list18-4big.jpg', '法国进口，深海鱼胶原蛋白肽 成人通用深海鱼提取');
INSERT INTO `mylist` VALUES ('33', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('34', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('35', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('36', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('37', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('38', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('39', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('40', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('41', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('42', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('43', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('44', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('45', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('46', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('47', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list12-1big.jpg', '../images/list12-2big.jpg', '../images/list12-3big.jpg', '../images/list12-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');
INSERT INTO `mylist` VALUES ('48', '1017', '49', '../images/list19.jpg', '商家', '修正天然维生素E', '57', '../images/list4-1big.jpg', '../images/list4-2big.jpg', '../images/list4-3big.jpg', '../images/list4-4big.jpg', '正规医药公司进货，除双休日及节假日，24小时发货，咨询可致电13402022548');

-- ----------------------------
-- Table structure for myuser
-- ----------------------------
DROP TABLE IF EXISTS `myuser`;
CREATE TABLE `myuser` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(30) NOT NULL,
  `passwords` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of myuser
-- ----------------------------
INSERT INTO `myuser` VALUES ('1', '15012430609', '1013xhtx');
INSERT INTO `myuser` VALUES ('3', '15012430608', '12345678');
SET FOREIGN_KEY_CHECKS=1;
