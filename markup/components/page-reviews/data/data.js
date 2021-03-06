const data = {
  pageReviews: {
    selectList: [{
      name: 'Все отзывы',
      amount: '169',
      checked: 'checked'
    },
    {
      name: 'Детские группы',
      amount: '19'
    },
    {
      name: 'Группы для взрослых',
      amount: '30'
    },
    {
      name: 'Корпоративное обучение',
      amount: '5'
    },
    {
      name: 'Дистанционное обучение',
      amount: '30'
    },
    {
      name: 'Выездные проекты',
      amount: '14'
    },
    {
      name: 'Разговорный клуб',
      amount: '32'
    },
    {
      name: 'Школа актерского мастерства',
      amount: '25'
    },
    {
      name: 'Учебно-методический центр',
      amount: '7'
    }
    ],
    commentsList: [
      {
        imgName: 'review-photo-1.jpg',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках',
        message: 'Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился. Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился',
        footer: true,
        tags: ['Группы для взрослых']
      },
      {
        imgName: 'review-photo-2.jpg',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино',
        message: 'Больше всего мне нравится наш педагог, Екатерина Немцова. Она хорошо объясняет, добрая, отзывчивая. Мне нравятся люди, которые сидят на ресепшн, если что – подскажут. Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился.Больше всего мне нравится наш педагог, Екатерина Немцова. Она хорошо объясняет, добрая, отзывчивая. Мне нравятся люди, которые сидят на ресепшн, если что – подскажут. ',
        footer: true,
        tags: ['Группы для взрослых,&#160;', 'Дистанционное обучение']
      },
      {
        imgName: 'review-photo-3.jpg',
        name: 'Павел',
        school: 'Школа в Солнцево',
        message: 'Прошел летний интенсив в Солнцево. Понравилось. Отдельное спасибо преподавателю Дарье, помогла преодолеть неуверенность в произношении на английском. Прошел летний интенсив в Солнцево.',
        footer: true,
        tags: ['Группы для взрослых']
      },
      {
        imgName: 'review-photo-4.jpg',
        name: 'Иванов Михаил',
        school: 'Школа в Кузьминках',
        message: 'Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился.  Я в течении очень маленького периода времени обучился. Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился.',
        footer: true,
        tags: ['Группы для взрослых']
      },
      {
        imgName: 'review-photo-5.jpg',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино',
        message: 'Больше всего мне нравится наш педагог, Екатерина Немцова. Она хорошо объясняет, добрая, отзывчивая. Мне нравятся люди, которые сидят на ресепшн, если что – подскажут. Больше всего мне нравится наш педагог, Екатерина Немцова.',
        footer: true,
        tags: ['Группы для взрослых']
      },
      {
        imgName: 'review-photo-6.jpg',
        name: 'Иван',
        school: 'Школа в Солнцево',
        message: 'Прошел летний интенсив в Солнцево. Понравилось. Отдельное спасибо преподавателю Дарье, помогла преодолеть неуверенность в произношении на английском. Отдельное спасибо преподавателю Дарье, помогла преодолеть неуверенность в произношении на английском.',
        tags: ['Дистанционное обучение'],
        footer: true
      },
      {
        imgName: 'review-photo-7.jpg',
        name: 'Смирнова Елена',
        school: 'Школа в Кузьминках',
        message: 'Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился. Понравилось. Отдельное спасибо преподавателю Дарье, помогла преодолеть неуверенность в произношении на английском.',
        footer: true,
        tags: ['Группы для взрослых']
      },
      {
        imgName: 'review-photo-8.jpg',
        name: 'Петровченко Стас',
        school: 'Школа в Хорвино',
        message: 'Больше всего мне нравится наш педагог, Екатерина Немцова. Она хорошо объясняет, добрая, отзывчивая. Мне нравятся люди, которые сидят на ресепшн, если что подскажут. Я учусь в YES еще с открытия школы. Я могу сказать, что это очень эффективные занятия, дополнительные курсы. Я в течении очень маленького периода времени обучился',
        footer: true,
        tags: ['Школа актерского мастерства,&#160;', 'Разговорный клуб']
      }
    ],
    reviewsWriter: [
      {
        src: 'review-cursive-1.jpg',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках '
      },
      {
        src: 'review-cursive-2.jpg',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино '
      },
      {
        src: 'review-cursive-3.jpg',
        name: 'Павел',
        school: 'Школа в Солнцево'
      },
      {
        src: 'review-cursive-4.jpg',
        name: 'Ирина Цыганова',
        school: 'Школа в Солнцево'
      },
      {
        src: 'review-cursive-5.jpg',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках'
      },
      {
        src: 'review-cursive-6.jpg',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино'
      },
      {
        src: 'review-cursive-7.jpg',
        name: 'Павел',
        school: 'Школа в Солнцево'
      },
      {
        src: 'review-cursive-8.jpg',
        name: 'Ирина Цыганова',
        school: 'Школа в Солнцево'
      },
      {
        src: 'review-cursive-9.jpg',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках'
      },
      {
        src: 'review-cursive-10.jpg',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино'
      },
      {
        src: 'review-cursive-11.jpg',
        name: 'Павел',
        school: 'Школа в Солнцево'
      },
      {
        src: 'review-cursive-12.jpg',
        name: 'Ирина Цыганова',
        school: 'Школа в Солнцево'
      }
    ],
    reviewsVideo: [
      {
        src: 'https://www.youtube.com/embed/.page-reviews__photo.page-reviews__photo--no-border',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках '
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино '
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Павел',
        school: 'Школа в Солнцево'
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Ирина Цыганова',
        school: 'Школа в Солнцево'
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Мацакян Ваге',
        school: 'Школа в Кузьминках'
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Настя Тарасюк',
        school: 'Школа в Хорвино'
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Павел',
        school: 'Школа в Солнцево'
      },
      {
        src: 'https://www.youtube.com/embed/fUYKHUH1VvI?rel=0&amp;controls=0&amp;showinfo=0',
        name: 'Ирина Цыганова',
        school: 'Школа в Солнцево'
      }
    ]

  }
};
