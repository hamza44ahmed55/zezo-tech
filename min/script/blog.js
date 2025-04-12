// Sample blog posts with images
const posts = [
    {
        title: "My First Blog Post",
        content: "Welcome to my personal blog! This is my first post. Stay tuned for more updates.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Exploring the Mountains",
        content: "I recently went hiking in the mountains. The views were breathtaking!",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Cooking My Favorite Dish",
        content: "I love cooking! Here's a recipe for my favorite dish.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Traveling to Japan",
        content: "Japan is an amazing country with rich culture and history. I can't wait to go back!",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Learning JavaScript",
        content: "JavaScript is a versatile programming language. I'm learning it for web development.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Photography Tips",
        content: "Here are some tips for taking great photos.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "My Favorite Books",
        content: "I love reading! Here are some of my favorite books.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Weekend Getaway",
        content: "I spent the weekend at the beach. It was so relaxing!",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Fitness Journey",
        content: "I've started a fitness journey and I'm excited to share my progress.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Tech Gadgets I Love",
        content: "Here are some tech gadgets that I can't live without.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Gardening Tips",
        content: "I recently started gardening. Here are some tips for beginners.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Music Playlist",
        content: "Here's my current music playlist. Enjoy!",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "DIY Home Projects",
        content: "I love DIY projects! Here are some ideas for your home.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Movie Recommendations",
        content: "Here are some movies I recommend watching.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Weekend Adventures",
        content: "I had an adventurous weekend exploring new places.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Fashion Trends",
        content: "Here are some fashion trends I'm loving right now.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Mindfulness and Meditation",
        content: "Practicing mindfulness has changed my life. Here's how.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Exploring Local Cuisine",
        content: "I love trying new foods! Here are some local dishes I enjoyed.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Art and Creativity",
        content: "Art is a big part of my life. Here are some of my favorite artists.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Sustainable Living",
        content: "I'm trying to live more sustainably. Here are some tips.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Personal Development",
        content: "I'm on a journey of personal development. Here are some resources I love.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Home Decor Ideas",
        content: "I love decorating my home! Here are some ideas.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Fitness Challenges",
        content: "I've been participating in fitness challenges. Here's my experience.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Traveling on a Budget",
        content: "Here are some tips for traveling without breaking the bank.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Learning a New Language",
        content: "I'm learning Spanish! Here are some resources that help me.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Home Workout Routines",
        content: "I love working out at home. Here are some routines I follow.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Weekend Road Trip",
        content: "I went on a road trip this weekend. It was so much fun!",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Creative Writing",
        content: "I enjoy creative writing. Here are some of my pieces.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Exploring Nature",
        content: "Nature is beautiful! Here are some photos from my hikes.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Tech Innovations",
        content: "Technology is evolving rapidly. Here are some innovations I'm excited about.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Volunteering Experiences",
        content: "I love giving back to the community. Here are my volunteering experiences.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Favorite Podcasts",
        content: "I enjoy listening to podcasts. Here are some of my favorites.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Home Office Setup",
        content: "I recently set up a home office. Here are some tips for creating a productive space.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Weekend Crafting",
        content: "I love crafting on the weekends. Here are some projects I've worked on.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    },
    {
        title: "Exploring New Hobbies",
        content: "I'm always looking to try new hobbies. Here are some I've enjoyed recently.",
        image: "/min/img/zezo - logo - png.png"  // Image file
    }
];

// Get the blog posts container
const blogPostsContainer = document.getElementById('blogPosts');

// Loop through the posts and create HTML elements
posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <img src="${post.image}" alt="Image for ${post.title}" class="post-image">
    `;

    blogPostsContainer.appendChild(postElement);
});
