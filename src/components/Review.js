import React, { useState } from 'react';

const Review = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]);
  const [index, setIndex] = useState(0);

  function handleNextBtn() {
    setIndex((prev) => (prev + 1) % data.length);
  }

  function handlePrevBtn() {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  }

  function handleRandomBtn() {
    let random = Math.floor(Math.random() * data.length);
    setIndex(random);
  }

  return (
    <div>
      <div className="review">
        <div className='author'>{data[index].name}</div>
        <div className='job'>{data[index].job}</div>
        <div className='info'>{data[index].text}</div>
        <h4 className="author" id={`author-${index + 1}`}>
          {data[index].name}
        </h4>
        <img src={data[index].image} className='person-img' alt={data[index].name} />
        <button className='prev-btn' onClick={handlePrevBtn}>Previous</button>
        <button className='next-btn' onClick={handleNextBtn}>Next</button>
        <button className='random-btn' onClick={handleRandomBtn}>surprise me</button>
      </div>
    </div>
  );
};

export default Review;
