import { Grid, styled, Typography } from '@mui/material';
import BibleStudyImg from '../img/BibleStudy.png';
import laptopImg from '../img/laptop.jpg';
import React from 'react';
import Header from '../components/Header';
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: '70px 0px',
  flexWrap: 'nowrap',
  backgroundColor: theme.secondary.main,
}));
const Content = styled(Grid)(({ theme }) => ({
  height: '650px',
  width: '825px',
  padding: '0 40px',
}));
const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '95px',
  lineHeight: '100px',
  padding: '50px 0',
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '40px',
  paddingBottom: '40px',
}));

const Tags = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  fontWeight: 500,
  fontSize: '40px',
  marginRight: '20px',
}));

const TagsContent = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  fontWeight: 700,
  fontSize: '40px',
  textDecoration: 'underline',
}));

const Img = styled('img')(({ theme }) => ({
  height: '650px',
  width: '825px',
}));

export default function ClassesEn() {
  const classData = [
    {
      title: `Men’s Class`,
      content: `Join our Christian men's Bible study class to deepen your faith, strengthen your understanding of Scripture, and build meaningful connections with fellow men on the journey of spiritual growth.`,
      time: '12:00pm',
      zoom: '481 6017 2181',
      img: '',
      color: '#C5E6FF99',
    },
    {
      title: `Women's Class`,
      content: `Join our dynamic women’s bible study to connect, learn, and thrive together as we explore Scripture, share wisdom, and support one another. Feel safe and grow in our women and powerful community.`,
      time: '12:00pm',
      zoom: '481 6017 2181',
      img: '',
      color: '#ECEAFF',
    },
    {
      title: `Young Woman's Class`,
      content: `Nurture your faith alongside like-minded young women. Together, we delve into Scripture, share insights, and navigate the unique joys and challenges of our journey with Christ.`,
      time: '12:00pm',
      zoom: '481 6017 2181',
      img: '',
      color: '#FFE7DD',
    },
    {
      title: `Young Men's Class`,
      content: `Join our community of young Christian men as we dive into Scripture and navigate the path of faith together. We explore how God's Word guides us through life's adventures.`,
      time: '12:00pm',
      zoom: '481 6017 2181',
      img: '',
      color: '#D5F0C4',
    },
    {
      title: `Kid's Class`,
      content: `Through interactive lessons, stories, and activities, children discover the timeless truths of God's Word in a fun and supportive environment. Join us in laying a strong foundation of faith for the next generation.`,
      time: '11:00pm',
      zoom: '481 6017 2181',
      img: '',
      color: '#E6B9B9',
    },
  ];
  return (
    <div>
      <Header text={'Bible Study'} image={BibleStudyImg}></Header>

      {classData.map((item, idx) => (
        <LiveGrid
          container
          key={idx}
          flexDirection={idx % 2 === 0 ? 'row' : 'row-reverse'}
        >
          <Content
            container
            flexDirection={'column'}
            justifyContent={'center'}
            sx={{ backgroundColor: item.color }}
          >
            <HeaderText variant="h6">{item.title}</HeaderText>
            <Text variant="h6">{item.content}</Text>
            <div>
              <Tags variant="h6">Time:</Tags>
              <TagsContent variant="h6">{item.time}</TagsContent>
            </div>
            <div>
              <Tags variant="h6">Zoom Code:</Tags>
              <TagsContent variant="h6">{item.zoom}</TagsContent>
            </div>
          </Content>
          <Img src={laptopImg} alt="" />
        </LiveGrid>
      ))}
    </div>
  );
}
