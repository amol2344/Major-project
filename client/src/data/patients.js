export const patients = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0123",
    age: 28,
    gender: "Female",
    profileImage: "/src/assets/patient1.jpg",
    address: "123 Oak Street, New York, NY 10001",
    emergencyContact: {
      name: "Mike Johnson",
      phone: "+1-555-0124",
      relationship: "Spouse"
    },
    medicalHistory: [
      "Lower back pain",
      "Sciatica",
      "Post-surgery rehabilitation"
    ],
    currentTherapist: "Dr. Ashwini Patel",
    joinDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1-555-0125",
    age: 35,
    gender: "Male",
    profileImage: "/src/assets/patient2.jpg",
    address: "456 Pine Avenue, Los Angeles, CA 90210",
    emergencyContact: {
      name: "Lisa Chen",
      phone: "+1-555-0126",
      relationship: "Sister"
    },
    medicalHistory: [
      "Sports injury - ACL tear",
      "Knee rehabilitation",
      "Strength training"
    ],
    currentTherapist: "Dr. Prasenjeet Kale",
    joinDate: "2024-02-01",
    status: "Active"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1-555-0127",
    age: 42,
    gender: "Female",
    profileImage: "/src/assets/patient3.jpg",
    address: "789 Elm Drive, Chicago, IL 60601",
    emergencyContact: {
      name: "Carlos Rodriguez",
      phone: "+1-555-0128",
      relationship: "Husband"
    },
    medicalHistory: [
      "Chronic neck pain",
      "Migraine management",
      "Posture correction"
    ],
    currentTherapist: "Dr. Sanket Devlekar",
    joinDate: "2024-01-20",
    status: "Active"
  },
  {
    id: 4,
    name: "David Thompson",
    email: "david.thompson@email.com",
    phone: "+1-555-0129",
    age: 31,
    gender: "Male",
    profileImage: "/src/assets/patient4.jpg",
    address: "321 Maple Lane, Houston, TX 77001",
    emergencyContact: {
      name: "Jennifer Thompson",
      phone: "+1-555-0130",
      relationship: "Wife"
    },
    medicalHistory: [
      "Shoulder impingement",
      "Rotator cuff rehabilitation",
      "Sports performance"
    ],
    currentTherapist: "Dr. Ashwini Patel",
    joinDate: "2024-02-10",
    status: "Active"
  },
  {
    id: 5,
    name: "Lisa Wang",
    email: "lisa.wang@email.com",
    phone: "+1-555-0131",
    age: 26,
    gender: "Female",
    profileImage: "/src/assets/patient5.jpg",
    address: "654 Cedar Road, Seattle, WA 98101",
    emergencyContact: {
      name: "James Wang",
      phone: "+1-555-0132",
      relationship: "Brother"
    },
    medicalHistory: [
      "Ankle sprain",
      "Balance training",
      "Return to sports"
    ],
    currentTherapist: "Dr. Prasenjeet Kale",
    joinDate: "2024-02-15",
    status: "Active"
  }
];

export const patientAppointments = [
  {
    id: 1,
    patientId: 1,
    doctorId: 1,
    doctorName: "Dr. Ashwini Patel",
    date: "2024-03-20",
    time: "10:00 AM",
    duration: 60,
    type: "Physical Therapy",
    status: "Confirmed",
    notes: "Lower back pain assessment and treatment plan",
    location: "Main Clinic - Room 101"
  },
  {
    id: 2,
    patientId: 1,
    doctorId: 1,
    doctorName: "Dr. Ashwini Patel",
    date: "2024-03-18",
    time: "2:00 PM",
    duration: 45,
    type: "Follow-up",
    status: "Completed",
    notes: "Progress evaluation and exercise modification",
    location: "Main Clinic - Room 101"
  },
  {
    id: 3,
    patientId: 2,
    doctorId: 2,
    doctorName: "Dr. Prasenjeet Kale",
    date: "2024-03-21",
    time: "11:30 AM",
    duration: 60,
    type: "Physical Therapy",
    status: "Confirmed",
    notes: "Knee rehabilitation session",
    location: "Main Clinic - Room 102"
  },
  {
    id: 4,
    patientId: 3,
    doctorId: 3,
    doctorName: "Dr. Sanket Devlekar",
    date: "2024-03-19",
    time: "9:00 AM",
    duration: 45,
    type: "Consultation",
    status: "Completed",
    notes: "Neck pain assessment",
    location: "Main Clinic - Room 103"
  },
  {
    id: 5,
    patientId: 4,
    doctorId: 1,
    doctorName: "Dr. Ashwini Patel",
    date: "2024-03-22",
    time: "3:00 PM",
    duration: 60,
    type: "Physical Therapy",
    status: "Pending",
    notes: "Shoulder rehabilitation",
    location: "Main Clinic - Room 101"
  }
];

export const patientExercises = [
  {
    id: 1,
    patientId: 1,
    name: "Pelvic Tilt Exercise",
    description: "Lie on your back with knees bent, gently tilt pelvis to flatten lower back against floor",
    category: "Core Strengthening",
    assignedDate: "2024-03-15",
    dueDate: "2024-03-22",
    frequency: "3 times daily",
    sets: 3,
    reps: 10,
    duration: "5 minutes",
    status: "Completed",
    instructions: "Hold each tilt for 5 seconds, repeat 10 times",
    videoUrl: "https://example.com/exercise1",
    notes: "Patient reports reduced lower back pain"
  },
  {
    id: 2,
    patientId: 1,
    name: "Cat-Cow Stretch",
    description: "Gentle spinal movement on hands and knees",
    category: "Flexibility",
    assignedDate: "2024-03-15",
    dueDate: "2024-03-22",
    frequency: "2 times daily",
    sets: 2,
    reps: 8,
    duration: "3 minutes",
    status: "Completed",
    instructions: "Alternate between arching and rounding back",
    videoUrl: "https://example.com/exercise2",
    notes: "Good form demonstrated"
  },
  {
    id: 3,
    patientId: 2,
    name: "Wall Squats",
    description: "Squat against wall with back flat",
    category: "Leg Strengthening",
    assignedDate: "2024-03-16",
    dueDate: "2024-03-23",
    frequency: "2 times daily",
    sets: 3,
    reps: 12,
    duration: "8 minutes",
    status: "Pending",
    instructions: "Hold squat position for 30 seconds",
    videoUrl: "https://example.com/exercise3",
    notes: "Focus on proper knee alignment"
  },
  {
    id: 4,
    patientId: 3,
    name: "Neck Retraction",
    description: "Pull chin back to create double chin",
    category: "Posture Correction",
    assignedDate: "2024-03-17",
    dueDate: "2024-03-24",
    frequency: "4 times daily",
    sets: 4,
    reps: 15,
    duration: "2 minutes",
    status: "Completed",
    instructions: "Hold position for 5 seconds",
    videoUrl: "https://example.com/exercise4",
    notes: "Helps with forward head posture"
  },
  {
    id: 5,
    patientId: 4,
    name: "Shoulder Blade Squeezes",
    description: "Squeeze shoulder blades together",
    category: "Upper Body",
    assignedDate: "2024-03-18",
    dueDate: "2024-03-25",
    frequency: "3 times daily",
    sets: 3,
    reps: 20,
    duration: "4 minutes",
    status: "Pending",
    instructions: "Hold squeeze for 3 seconds",
    videoUrl: "https://example.com/exercise5",
    notes: "Improves shoulder stability"
  }
];

export const patientProgress = [
  {
    id: 1,
    patientId: 1,
    date: "2024-03-15",
    painLevel: 7,
    mobilityScore: 6,
    strengthScore: 5,
    notes: "Initial assessment - significant lower back pain, limited mobility",
    therapistNotes: "Patient shows good motivation, starting with gentle exercises"
  },
  {
    id: 2,
    patientId: 1,
    date: "2024-03-18",
    painLevel: 5,
    mobilityScore: 7,
    strengthScore: 6,
    notes: "Pain reduced after 3 days of exercises",
    therapistNotes: "Good progress, can increase exercise intensity slightly"
  },
  {
    id: 3,
    patientId: 2,
    date: "2024-03-16",
    painLevel: 4,
    mobilityScore: 8,
    strengthScore: 7,
    notes: "Knee feeling stronger, able to walk longer distances",
    therapistNotes: "Excellent recovery, continuing with current protocol"
  },
  {
    id: 4,
    patientId: 3,
    date: "2024-03-17",
    painLevel: 6,
    mobilityScore: 5,
    strengthScore: 6,
    notes: "Neck still stiff, but posture improving",
    therapistNotes: "Patient needs to be more consistent with home exercises"
  },
  {
    id: 5,
    patientId: 4,
    date: "2024-03-18",
    painLevel: 5,
    mobilityScore: 7,
    strengthScore: 6,
    notes: "Shoulder range of motion improving",
    therapistNotes: "Good response to treatment, continue current exercises"
  }
];

export const patientMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Dr. Ashwini Patel",
    senderType: "doctor",
    receiverId: 1,
    receiverName: "Sarah Johnson",
    receiverType: "patient",
    subject: "Exercise Modification",
    message: "Hi Sarah, I've reviewed your progress and would like to modify your pelvic tilt exercise. Please increase to 4 sets of 12 reps. Let me know if you experience any discomfort.",
    timestamp: "2024-03-19T10:30:00Z",
    isRead: true,
    priority: "normal"
  },
  {
    id: 2,
    senderId: 1,
    senderName: "Sarah Johnson",
    senderType: "patient",
    receiverId: 1,
    receiverName: "Dr. Ashwini Patel",
    receiverType: "doctor",
    subject: "Re: Exercise Modification",
    message: "Thank you Dr. Patel. I'll start the new routine tomorrow. The current exercises are really helping with my back pain.",
    timestamp: "2024-03-19T14:15:00Z",
    isRead: true,
    priority: "normal"
  },
  {
    id: 3,
    senderId: 2,
    senderName: "Dr. Prasenjeet Kale",
    senderType: "doctor",
    receiverId: 2,
    receiverName: "Michael Chen",
    receiverType: "patient",
    subject: "Next Appointment Reminder",
    message: "Hi Michael, just a reminder that your next appointment is tomorrow at 11:30 AM. Please bring your exercise log and any questions you have.",
    timestamp: "2024-03-20T09:00:00Z",
    isRead: false,
    priority: "normal"
  },
  {
    id: 4,
    senderId: 3,
    senderName: "Dr. Sanket Devlekar",
    senderType: "doctor",
    receiverId: 3,
    receiverName: "Emily Rodriguez",
    receiverType: "patient",
    subject: "Progress Check",
    message: "Emily, how are you feeling with the neck exercises? Are you experiencing any improvement in your posture?",
    timestamp: "2024-03-19T16:45:00Z",
    isRead: true,
    priority: "normal"
  },
  {
    id: 5,
    senderId: 4,
    senderName: "David Thompson",
    senderType: "patient",
    receiverId: 1,
    receiverName: "Dr. Ashwini Patel",
    receiverType: "doctor",
    subject: "Appointment Reschedule Request",
    message: "Dr. Patel, I need to reschedule my appointment on March 22nd. Would March 23rd at the same time work for you?",
    timestamp: "2024-03-20T11:20:00Z",
    isRead: false,
    priority: "high"
  }
];
