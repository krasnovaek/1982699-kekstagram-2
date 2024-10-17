class FeedPostsGenerator {
  static MAX_COMMENTS_COUNT = 30;
  postsStore = new Map();
  commentsStore = new Map();

  constructor(count = 25) {
    this.conut = count;
    this.commentsMaxCout = count * FeedPostsGenerator.MAX_COMMENTS_COUNT;
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomValueFromArray(array) {
    if (!Array.isArray(array)) {
      throw new Error('Значение долно быть массивом');
    }

    return array[Math.floor(Math.random() * array.length)];
  }

  generateUniqueIdentity(maxIdentity, dataStore) {
    let result;
    do {
      result = this.generateRandomNumber(0, maxIdentity);
    } while (dataStore.has(result));
    return result;
  }

  generateRandomName() {
    const namePrefixes = ['Bel', 'Nar', 'Xan', 'Jin', 'Far', 'Kas', 'Ver', 'Rin', 'Sar', 'Zen'];
    const nameSuffixes = ['dor', 'han', 'thos', 'lian', 'mar', 'ser', 'ion', 'en', 'lar', 'an'];
    const prefix = this.getRandomValueFromArray(namePrefixes);
    const suffix = this.getRandomValueFromArray(nameSuffixes);
    return prefix + suffix;
  }

  generateRandomDescription() {
    const subjects = ['Батон', 'Бездна', 'Пейзаж', 'Чашка', 'Зонт', 'Нота', 'Храм', 'Цитрус', 'Лебедь', 'Тигр'];
    const adjectives = ['красный', 'универсальный', 'зеленый', 'оранжевый', 'громкий', 'прекрасный', 'жемчужный', 'милый', 'королевский', 'яркий'];
    const actions = ['играет в парке', 'отдыхает на природе', 'летает в небе', 'светит в горах', 'растет в лесу', 'стоит у реки', 'переходит дорогу', 'цветет в огороде', 'плавает в озере', 'плавает в бассейне'];
    const places = ['в городе', 'в деревне', 'на дороге', 'в парке', 'на пляже', 'в лесу', 'на острове', 'в пустыне', 'в горах', 'в бассейне'];

    const subject = this.getRandomValueFromArray(subjects);
    const adjective = this.getRandomValueFromArray(adjectives);
    const action = this.getRandomValueFromArray(actions);
    const place = this.getRandomValueFromArray(places);

    return `${subject}, ${adjective}, ${action} ${place}.`;
  }

  generateRandomComment() {
    const comments = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];

    return {
      id: this.generateUniqueIdentity(this.commentsMaxCout, this.commentsStore),
      avatar: `img/avatar-${this.generateRandomNumber(0, 6)}`,
      message: this.getRandomValueFromArray(comments),
      name: this.generateRandomName()
    };
  }

  generateRandomComments() {
    const result = [];
    const commentsCout = this.generateRandomNumber(0, 30);
    for (let index = 0; index < commentsCout; index++) {
      const comment = this.generateRandomComment();
      result.push(comment);
      this.commentsStore.set(comment.id, comment);
    }

    return result;
  }

  constructFeedPost(identity) {
    return {
      id: identity,
      url: `photos/${identity}.jpg`,
      description: this.generateRandomDescription(),
      likes: this.generateRandomNumber(15, 200),
      comments: this.generateRandomComments()
    };
  }

  generate(regenerate = false) {
    if (!regenerate && this.postsStore.size > 0) {
      return Array.from(this.postsStore.keys);
    }

    for (let index = 0; index < this.conut; index++) {
      const identity = this.generateUniqueIdentity(this.conut, this.postsStore);
      const feedPost = this.constructFeedPost(identity);
      this.postsStore.set(identity, feedPost);
    }

    return Array.from(this.postsStore.values());
  }
}

const generator = new FeedPostsGenerator(25);

console.log(generator.generate());

