const dementiaActivities = [
    {
      activityID: "ACT01",
      title: "Memory Lane",
      date: "12-01-2024",
      description: "Engage in a reminiscence activity by looking at old photos and discussing memories.",
      steps: ["Select old photos", "Discuss memories", "Share stories"],
      duration: "30 minutes",
      mainImage: "memory_lane_main.jpg",
      subImages: ["memory_lane_1.jpg", "memory_lane_2.jpg", "memory_lane_3.jpg", "memory_lane_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT02",
      title: "Gardening Therapy",
      date: "12-01-2024",
      description: "Spend time planting flowers or herbs in the garden. It provides a sense of accomplishment.",
      steps: ["Choose plants", "Plant seeds", "Water regularly", "Enjoy the garden"],
      duration: "45 minutes",
      mainImage: "gardening_therapy_main.jpg",
      subImages: ["gardening_therapy_1.jpg", "gardening_therapy_2.jpg", "gardening_therapy_3.jpg", "gardening_therapy_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT03",
      title: "Music Therapy",
      date: "13-01-2024",
      description: "Listen to calming music and engage in simple movements. Music can evoke positive emotions.",
      steps: ["Select favorite music", "Sit comfortably", "Move gently with the rhythm"],
      duration: "20 minutes",
      mainImage: "music_therapy_main.jpg",
      subImages: ["music_therapy_1.jpg", "music_therapy_2.jpg", "music_therapy_3.jpg", "music_therapy_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT04",
      title: "Art and Craft",
      date: "13-01-2024",
      description: "Express creativity through painting or crafting. It stimulates cognitive abilities.",
      steps: ["Gather art supplies", "Create a masterpiece", "Display the artwork"],
      duration: "40 minutes",
      mainImage: "art_and_craft_main.jpg",
      subImages: ["art_and_craft_1.jpg", "art_and_craft_2.jpg", "art_and_craft_3.jpg", "art_and_craft_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT05",
      title: "Nature Walk",
      date: "14-01-2024",
      description: "Take a gentle walk in a nearby park or garden. Nature has therapeutic benefits.",
      steps: ["Put on comfortable shoes", "Enjoy the surroundings", "Breathe deeply"],
      duration: "25 minutes",
      mainImage: "nature_walk_main.jpg",
      subImages: ["nature_walk_1.jpg", "nature_walk_2.jpg", "nature_walk_3.jpg", "nature_walk_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT06",
      title: "Puzzle Time",
      date: "14-01-2024",
      description: "Work on a jigsaw puzzle to enhance problem-solving skills and concentration.",
      steps: ["Choose a puzzle", "Assemble the pieces", "Celebrate completion"],
      duration: "35 minutes",
      mainImage: "puzzle_time_main.jpg",
      subImages: ["puzzle_time_1.jpg", "puzzle_time_2.jpg", "puzzle_time_3.jpg", "puzzle_time_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT07",
      title: "Cooking Together",
      date: "15-01-2024",
      description: "Prepare a simple recipe together. It fosters a sense of achievement and joy.",
      steps: ["Select a recipe", "Follow instructions", "Share the meal"],
      duration: "50 minutes",
      mainImage: "cooking_together_main.jpg",
      subImages: ["cooking_together_1.jpg", "cooking_together_2.jpg", "cooking_together_3.jpg", "cooking_together_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT08",
      title: "Balloon Volleyball",
      date: "15-01-2024",
      description: "Engage in a seated balloon volleyball game for physical activity and fun.",
      steps: ["Inflate balloons", "Set up a net", "Enjoy the game"],
      duration: "30 minutes",
      mainImage: "balloon_volleyball_main.jpg",
      subImages: ["balloon_volleyball_1.jpg", "balloon_volleyball_2.jpg", "balloon_volleyball_3.jpg", "balloon_volleyball_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT09",
      title: "Reading Circle",
      date: "16-01-2024",
      description: "Read a short story or poem together. It promotes communication and imagination.",
      steps: ["Choose reading material", "Take turns reading", "Discuss thoughts"],
      duration: "25 minutes",
      mainImage: "reading_circle_main.jpg",
      subImages: ["reading_circle_1.jpg", "reading_circle_2.jpg", "reading_circle_3.jpg", "reading_circle_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT10",
      title: "Chair Exercises",
      date: "16-01-2024",
      description: "Perform seated exercises to enhance flexibility and mobility.",
      steps: ["Warm-up", "Follow exercise routine", "Cool down"],
      duration: "20 minutes",
      mainImage: "chair_exercises_main.jpg",
      subImages: ["chair_exercises_1.jpg", "chair_exercises_2.jpg", "chair_exercises_3.jpg", "chair_exercises_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT11",
      title: "Sensory Boxes",
      date: "17-01-2024",
      description: "Explore sensory boxes filled with different textures and objects.",
      steps: ["Prepare sensory boxes", "Feel different textures", "Describe sensations"],
      duration: "30 minutes",
      mainImage: "sensory_boxes_main.jpg",
      subImages: ["sensory_boxes_1.jpg", "sensory_boxes_2.jpg", "sensory_boxes_3.jpg", "sensory_boxes_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT12",
      title: "Fruit Tasting",
      date: "17-01-2024",
      description: "Enjoy a variety of fruits together. It stimulates the senses and provides nutrition.",
      steps: ["Select fruits", "Slice and prepare", "Taste and discuss"],
      duration: "25 minutes",
      mainImage: "fruit_tasting_main.jpg",
      subImages: ["fruit_tasting_1.jpg", "fruit_tasting_2.jpg", "fruit_tasting_3.jpg", "fruit_tasting_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT13",
      title: "Mindful Breathing",
      date: "18-01-2024",
      description: "Practice mindful breathing exercises for relaxation and stress reduction.",
      steps: ["Find a comfortable space", "Inhale and exhale slowly", "Focus on the breath"],
      duration: "15 minutes",
      mainImage: "mindful_breathing_main.jpg",
      subImages: ["mindful_breathing_1.jpg", "mindful_breathing_2.jpg", "mindful_breathing_3.jpg", "mindful_breathing_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT14",
      title: "Pet Therapy",
      date: "18-01-2024",
      description: "Interact with friendly therapy animals for companionship and joy.",
      steps: ["Arrange a pet visit", "Pet and interact", "Enjoy the positive effects"],
      duration: "40 minutes",
      mainImage: "pet_therapy_main.jpg",
      subImages: ["pet_therapy_1.jpg", "pet_therapy_2.jpg", "pet_therapy_3.jpg", "pet_therapy_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT15",
      title: "Coloring Session",
      date: "19-01-2024",
      description: "Engage in coloring activities to promote relaxation and creativity.",
      steps: ["Provide coloring materials", "Choose a coloring sheet", "Enjoy the process"],
      duration: "30 minutes",
      mainImage: "coloring_session_main.jpg",
      subImages: ["coloring_session_1.jpg", "coloring_session_2.jpg", "coloring_session_3.jpg", "coloring_session_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT16",
      title: "Storytelling",
      date: "19-01-2024",
      description: "Create and share imaginative stories. It enhances cognitive abilities and communication.",
      steps: ["Encourage storytelling", "Share creative tales", "Discuss the stories"],
      duration: "35 minutes",
      mainImage: "storytelling_main.jpg",
      subImages: ["storytelling_1.jpg", "storytelling_2.jpg", "storytelling_3.jpg", "storytelling_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT17",
      title: "Chair Yoga",
      date: "20-01-2024",
      description: "Practice gentle yoga poses while seated to improve flexibility and relaxation.",
      steps: ["Choose comfortable attire", "Follow guided yoga session", "Enjoy the benefits"],
      duration: "25 minutes",
      mainImage: "chair_yoga_main.jpg",
      subImages: ["chair_yoga_1.jpg", "chair_yoga_2.jpg", "chair_yoga_3.jpg", "chair_yoga_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT18",
      title: "Board Games",
      date: "20-01-2024",
      description: "Enjoy classic board games for entertainment and cognitive stimulation.",
      steps: ["Select favorite games", "Set up and play", "Celebrate the fun"],
      duration: "40 minutes",
      mainImage: "board_games_main.jpg",
      subImages: ["board_games_1.jpg", "board_games_2.jpg", "board_games_3.jpg", "board_games_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT19",
      title: "Virtual Travel",
      date: "21-01-2024",
      description: "Explore different places through virtual travel experiences. It sparks curiosity.",
      steps: ["Use virtual reality or videos", "Discuss travel memories", "Share experiences"],
      duration: "30 minutes",
      mainImage: "virtual_travel_main.jpg",
      subImages: ["virtual_travel_1.jpg", "virtual_travel_2.jpg", "virtual_travel_3.jpg", "virtual_travel_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT20",
      title: "Dance Party",
      date: "21-01-2024",
      description: "Dance to favorite tunes for physical activity and enjoyment. It boosts mood.",
      steps: ["Create a playlist", "Dance freely", "Celebrate the joy"],
      duration: "20 minutes",
      mainImage: "dance_party_main.jpg",
      subImages: ["dance_party_1.jpg", "dance_party_2.jpg", "dance_party_3.jpg", "dance_party_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT21",
      title: "Hand Massage",
      date: "22-01-2024",
      description: "Provide gentle hand massages for relaxation and sensory stimulation.",
      steps: ["Use lotion or oil", "Massage with care", "Enjoy the soothing touch"],
      duration: "15 minutes",
      mainImage: "hand_massage_main.jpg",
      subImages: ["hand_massage_1.jpg", "hand_massage_2.jpg", "hand_massage_3.jpg", "hand_massage_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT22",
      title: "Ice Cream Social",
      date: "22-01-2024",
      description: "Host an ice cream social for a sweet treat and social interaction.",
      steps: ["Prepare favorite toppings", "Enjoy ice cream together", "Share stories"],
      duration: "30 minutes",
      mainImage: "ice_cream_social_main.jpg",
      subImages: ["ice_cream_social_1.jpg", "ice_cream_social_2.jpg", "ice_cream_social_3.jpg", "ice_cream_social_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT23",
      title: "Singing Session",
      date: "23-01-2024",
      description: "Sing familiar songs together for joy and reminiscence.",
      steps: ["Select favorite songs", "Sing along together", "Enjoy the musical experience"],
      duration: "25 minutes",
      mainImage: "singing_session_main.jpg",
      subImages: ["singing_session_1.jpg", "singing_session_2.jpg", "singing_session_3.jpg", "singing_session_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT24",
      title: "Photo Collage",
      date: "23-01-2024",
      description: "Create a collage with photos and memorabilia. It encourages creativity.",
      steps: ["Gather materials", "Arrange and glue items", "Admire the finished collage"],
      duration: "40 minutes",
      mainImage: "photo_collage_main.jpg",
      subImages: ["photo_collage_1.jpg", "photo_collage_2.jpg", "photo_collage_3.jpg", "photo_collage_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT25",
      title: "Themed Dress-Up",
      date: "24-01-2024",
      description: "Engage in a themed dress-up session for fun and creativity.",
      steps: ["Select a theme", "Choose costumes", "Show off the outfits"],
      duration: "30 minutes",
      mainImage: "themed_dress_up_main.jpg",
      subImages: ["themed_dress_up_1.jpg", "themed_dress_up_2.jpg", "themed_dress_up_3.jpg", "themed_dress_up_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT26",
      title: "Tech Exploration",
      date: "24-01-2024",
      description: "Explore technology devices for mental stimulation and entertainment.",
      steps: ["Use tablets or computers", "Discover new apps", "Share tech experiences"],
      duration: "25 minutes",
      mainImage: "tech_exploration_main.jpg",
      subImages: ["tech_exploration_1.jpg", "tech_exploration_2.jpg", "tech_exploration_3.jpg", "tech_exploration_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT27",
      title: "Aromatherapy Session",
      date: "25-01-2024",
      description: "Enjoy calming scents through aromatherapy for relaxation and sensory pleasure.",
      steps: ["Select favorite scents", "Use diffusers or scented oils", "Relax and breathe deeply"],
      duration: "20 minutes",
      mainImage: "aromatherapy_session_main.jpg",
      subImages: ["aromatherapy_session_1.jpg", "aromatherapy_session_2.jpg", "aromatherapy_session_3.jpg", "aromatherapy_session_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT28",
      title: "Friendly Visits",
      date: "25-01-2024",
      description: "Arrange visits from friends or family for social connection and joy.",
      steps: ["Coordinate visit times", "Enjoy conversations", "Share positive moments"],
      duration: "45 minutes",
      mainImage: "friendly_visits_main.jpg",
      subImages: ["friendly_visits_1.jpg", "friendly_visits_2.jpg", "friendly_visits_3.jpg", "friendly_visits_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT29",
      title: "Yoga Meditation",
      date: "26-01-2024",
      description: "Practice seated meditation for relaxation and mindfulness.",
      steps: ["Find a quiet space", "Sit comfortably", "Focus on breath and peaceful thoughts"],
      duration: "30 minutes",
      mainImage: "yoga_meditation_main.jpg",
      subImages: ["yoga_meditation_1.jpg", "yoga_meditation_2.jpg", "yoga_meditation_3.jpg", "yoga_meditation_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT30",
      title: "Pet Adoption Day",
      date: "26-01-2024",
      description: "Organize a pet adoption day with friendly animals. It brings joy and excitement.",
      steps: ["Contact local shelters", "Introduce adoptable pets", "Enjoy the interactions"],
      duration: "40 minutes",
      mainImage: "pet_adoption_day_main.jpg",
      subImages: ["pet_adoption_day_1.jpg", "pet_adoption_day_2.jpg", "pet_adoption_day_3.jpg", "pet_adoption_day_4.jpg"],
      completed:false,
      skipped:false,
    },

    {
      activityID: "ACT31",
      title: "Go For Walk",
      date: "31-01-2024",
      description: "Organize a pet adoption day with friendly animals. It brings joy and excitement.",
      steps: ["Contact local shelters", "Introduce adoptable pets", "Enjoy the interactions"],
      duration: "40 minutes",
      mainImage: "pet_adoption_day_main.jpg",
      subImages: ["pet_adoption_day_1.jpg", "pet_adoption_day_2.jpg", "pet_adoption_day_3.jpg", "pet_adoption_day_4.jpg"],
      completed:false,
      skipped:false,
    },

    {
      activityID: "ACT32",
      title: "Yoga Meditation",
      date: "01-02-2024",
      description: "Practice seated meditation for relaxation and mindfulness.",
      steps: ["Find a quiet space", "Sit comfortably", "Focus on breath and peaceful thoughts"],
      duration: "30 minutes",
      mainImage: "yoga_meditation_main.jpg",
      subImages: ["yoga_meditation_1.jpg", "yoga_meditation_2.jpg", "yoga_meditation_3.jpg", "yoga_meditation_4.jpg"],
      completed:false,
      skipped:false,
    },

    {
      activityID: "ACT33",
      title: "Pet Adoption Day",
      date: "01-02-2024",
      description: "Organize a pet adoption day with friendly animals. It brings joy and excitement.",
      steps: ["Contact local shelters", "Introduce adoptable pets", "Enjoy the interactions"],
      duration: "40 minutes",
      mainImage: "pet_adoption_day_main.jpg",
      subImages: ["pet_adoption_day_1.jpg", "pet_adoption_day_2.jpg", "pet_adoption_day_3.jpg", "pet_adoption_day_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT34",
      title: "Aromatherapy Session",
      date: "01-02-2024",
      description: "Enjoy calming scents through aromatherapy for relaxation and sensory pleasure.",
      steps: ["Select favorite scents", "Use diffusers or scented oils", "Relax and breathe deeply"],
      duration: "20 minutes",
      mainImage: "aromatherapy_session_main.jpg",
      subImages: ["aromatherapy_session_1.jpg", "aromatherapy_session_2.jpg", "aromatherapy_session_3.jpg", "aromatherapy_session_4.jpg"],
      completed:false,
      skipped:false,
    },
    {
      activityID: "ACT35",
      title: "Yoga Meditation",
      date: "02-02-2024",
      description: "Practice seated meditation for relaxation and mindfulness.",
      steps: ["Find a quiet space", "Sit comfortably", "Focus on breath and peaceful thoughts"],
      duration: "30 minutes",
      mainImage: "yoga_meditation_main.jpg",
      subImages: ["yoga_meditation_1.jpg", "yoga_meditation_2.jpg", "yoga_meditation_3.jpg", "yoga_meditation_4.jpg"],
      completed:false,
      skipped:false,
    },
  
  ];
  
  export default dementiaActivities;
  