const employmentTypes = {
    INTERN: 'INTERN',
    FULL_TIME: 'FULL_TIME'
}

const companyTypes = {
    PRODUCT_BASED: 'Product Based',
    SERVICE_BASED: 'Service Based',
    STARTUP: 'Startup',
    NON_PROFIT: 'Non-Profit',
};

export const notesType = {
    CODING: 'coding',
    APTITUDE: 'aptitude'

}

export const Notes = {
    Java: 'Java',
    Python: 'Python',
    Cpp: 'Cpp',
    Aptitude: 'Aptitude',
    Reasoning: 'Reasoning',
    Maths: 'Maths'
}

export const HandWrittenNotes = {
    Java: {
        title: 'Java HandWritten Notes',
        subtitle: 'For Java Handwritten Notes : In this Java handwritten Notes following topics are covered. You can use these notes for studying or for practicing Java',
        description: 'Unlock Java potential with our expertly crafted handwritten notes. Whether you are a beginner or an experienced programmer, these notes will boost your Java skills.',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        cost: 99,
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"]
    },
    Python: {
        title: 'Python HandWritten Notes',
        subtitle: 'For Python Handwritten Notes : In this Python handwritten Notes following topics are covered. You can use these notes for studying or for practicing Python',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"],
        cost: 49
    },
    Cpp: {
        title: 'C++ HandWritten Notes',
        subtitle: 'For C++ Handwritten Notes : In this C++ handwritten Notes following topics are covered. You can use these notes for studying or for practicing C++',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"],
        cost: 149
    },
    Aptitude: {
        title: 'Aptitude HandWritten Notes',
        subtitle: 'For Aptitude Handwritten Notes : In this Aptitude handwritten Notes following topics are covered. You can use these notes for studying or for practicing Aptitude',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"],
        cost: 149
    },
    Reasoning: {
        title: 'Reasoning HandWritten Notes',
        subtitle: 'For Reasoning Handwritten Notes : In this Reasoning handwritten Notes following topics are covered. You can use these notes for studying or for practicing Reasoning',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"],
        cost: 149
    },
    Maths: {
        title: 'Maths HandWritten Notes',
        subtitle: 'For Maths Handwritten Notes : In this Maths handwritten Notes following topics are covered. You can use these notes for studying or for practicing Maths',
        contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
        benefits: ['Easiest Explanation', 'Clear and Neat Writing', 'Best for Exams and Interview Preparation', 'Cover All Java Topics'],
        PreviewImages: ["https://res.cloudinary.com/nithinmanda/image/upload/v1725691545/developer.nithin/6260057461650211156_k2iqf4.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211097_ujuyno.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211096_s9wcnw.jpg", "https://res.cloudinary.com/nithinmanda/image/upload/v1725683111/developer.nithin/6260057461650211098_xd86jk.jpg"],
        cost: 199
    },

}