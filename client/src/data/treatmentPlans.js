    // src/data/treatmentPlans.js
export const treatmentPlans = [
  {
    id: 'tp1',
    patientName: 'Ravi Kulkarni',
    diagnosis: 'ACL Tear',
    startDate: '2025-08-01',
    endDate: '2025-09-12',
    status: 'Active',
    goals: [
      'Restore knee stability',
      'Improve quadriceps strength',
      'Reduce inflammation',
    ],
    exercises: [
      {
        exerciseId: 6,
        name: 'Static Quads',
        frequency: 'Daily',
        sets: 4,
        reps: 10,
        duration: '2 weeks',
        notes: 'Focus on muscle activation without joint movement',
      },
      {
        exerciseId: 7,
        name: 'Lunges',
        frequency: 'Alternate Days',
        sets: 3,
        reps: 12,
        duration: '3 weeks',
        notes: 'Ensure proper knee alignment',
      },
      {
        exerciseId: 8,
        name: 'Wall Squats',
        frequency: 'Daily',
        sets: 3,
        reps: 15,
        duration: '3 weeks',
      },
    ],
    progressNotes: [
      {
        date: '2025-08-10',
        notes: 'Patient shows improved quad control',
        nextSteps: 'Introduce resistance band exercises',
      },
      {
        date: '2025-08-20',
        notes: 'Mild swelling observed post lunges',
        nextSteps: 'Reduce reps and monitor response',
      },
    ],
  },
  {
    id: 'tp2',
    patientName: 'Sneha Patil',
    diagnosis: 'Post Knee Surgery',
    startDate: '2025-07-15',
    endDate: '2025-08-30',
    status: 'Completed',
    goals: [
      'Regain full range of motion',
      'Strengthen surrounding muscles',
    ],
    exercises: [
      {
        exerciseId: 1,
        name: 'Seated Knee Extension',
        frequency: 'Daily',
        sets: 3,
        reps: 10,
        duration: '2 weeks',
      },
      {
        exerciseId: 3,
        name: 'Heel Slides',
        frequency: 'Daily',
        sets: 3,
        reps: 15,
        duration: '3 weeks',
      },
      {
        exerciseId: 4,
        name: 'Quad Sets',
        frequency: 'Daily',
        sets: 3,
        reps: 10,
        duration: '3 weeks',
      },
    ],
    progressNotes: [
      {
        date: '2025-07-20',
        notes: 'Initial stiffness reduced',
        nextSteps: 'Begin light resistance training',
      },
    ],
  },
];