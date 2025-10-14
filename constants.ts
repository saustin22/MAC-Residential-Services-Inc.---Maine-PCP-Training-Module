import { SlideContent, QuizQuestion, QuestionType, FacilitatorGuideSection } from './types';

export const slidesData: SlideContent[] = [
  {
    type: 'title',
    title: 'Person-Centered Planning for DSPs',
    subtitle: 'Dignity, Voice & Choice',
    footer: 'MAC Residential Services, Inc.',
    presenter: 'Presenter Name / Date',
    notes: '“Welcome everybody. This training is required under Maine OADS standards and central to how we deliver respect-centered care.”',
  },
  {
    type: 'bullets',
    title: 'Why This Matters',
    content: [
      'Every person we support has a right to lead their life.',
      'PCP ensures their voice guides their supports.',
      'As DSPs, we help make that real.',
    ],
    notes: 'Tie to MAC’s culture: “family-style, dignity first.”',
  },
  {
    type: 'definition',
    title: 'What Is a Person-Centered Plan?',
    content: [
      'Definition: A plan led by the person, reflecting preferences, goals, supports',
      'Involves a team: individual, family, case manager, DSPs, natural supports',
    ],
    notes: 'Emphasize “to the greatest extent possible” the person leads.',
  },
  {
    type: 'bullets',
    title: 'Maine OADS Expectations',
    content: [
      'PCP reviewed at least **annually** or on major change',
      'The **case manager** is responsible for scheduling/facilitation',
      'DSPs provide key input (progress, observations, changes)',
    ],
    notes: 'If possible, insert the relevant rule citation for DSP qualification.',
  },
  {
    type: 'bullets',
    title: 'Your Role as a DSP',
    content: [
      'Observe & document progress',
      'Encourage the person’s communication',
      'Respect their choices (even ones you’d do differently)',
      'Report changes in support needs promptly',
    ],
  },
  {
    type: 'table',
    title: 'Before, During, After',
    table: {
      headers: ['Phase', 'DSP Responsibility'],
      rows: [
        ['Before', 'Review past plan, talk with the person, gather updates'],
        ['During', 'Listen, support self-expression, be present, document'],
        ['After', 'Embed new goals in daily support, update documentation'],
      ],
    },
  },
  {
    type: 'bullets',
    title: 'Real-Life Examples',
    content: [
      '**Example A:** Alex wants to volunteer — scheduling, transport added',
      '**Example B:** Maria changes food preferences — menu updated',
    ],
    notes: 'Encourage staff to think of their own examples.',
  },
  {
    type: 'bullets',
    title: 'Rights & Dignity',
    content: [
      'Right to make choices — even ones we might question',
      'We ensure safety without overriding autonomy',
      'Use restorative supervision: accountability, relationship, growth',
    ],
  },
  {
    type: 'prompt',
    title: 'Reflection',
    content: [
      '“How do I show respect for choice today?”',
      '“One thing I’ll change this week to better support someone’s goals.”',
    ],
  },
  {
    type: 'final',
    title: 'Certification & Next Steps',
    content: [
      'Take the DSP quiz (Google Form)',
      'HR logs your completion in MAC Pulse Tracker',
      'You’ll receive a certificate and your completion will be added to your training record',
    ],
  },
];

export const facilitatorGuideData: FacilitatorGuideSection[] = [
    {
      title: 'Introduction / Trainer Instructions',
      content: [
        'Time estimate: 60 minutes total (including discussion)',
        'Audience: New DSPs or refresher for existing staff',
        'Materials: Slide deck, printed scenario handouts, whiteboard or flip chart',
      ],
    },
    {
      title: 'Slide 1 (Title Slide)',
      content: ['Introduce yourself, set expectations', 'Emphasize that PCP is both policy and practice'],
    },
    {
      title: 'Slide 2 (Why This Matters)',
      content: [
        'Engage staff: ask one person to describe a time when they felt really “heard”',
        'Tie to mission: every person deserves that in their life support',
      ],
    },
    {
      title: 'Slide 3 (What Is PCP)',
      content: ['Walk through definition', 'Ask: “What would you want your plan to include if this was your life?”'],
    },
    {
      title: 'Slide 4 (OADS Expectations)',
      content: ['Highlight review schedule and DSP role', '(If available) show the official OADS DSP qualification rule'],
    },
    {
      title: 'Slide 5 (Your Role as DSP)',
      content: [
        'Share examples of good vs. weak documentation',
        { type: 'strong', text: 'Strong: “John independently washed his face and changed clothes (6:30–6:45 a.m.)”' },
        { type: 'weak', text: 'Weak: “John did fine this morning.”' },
      ],
    },
    {
      title: 'Slide 6 (Before, During, After)',
      content: [
        'Break into pairs and role-play a “before the meeting check-in”',
        'Ask: What would you prepare? What questions would you ask the person?',
      ],
    },
    { title: 'Slide 7 (Examples)', content: ['Present the two scenarios', 'Ask: What might the DSP have done differently or better?'] },
    {
      title: 'Slide 8 (Rights & Dignity)',
      content: ['Emphasize doing risk assessment without eliminating choice', 'Model “good supervisory language” (restorative, not punitive)'],
    },
    {
      title: 'Slide 9 (Reflection)',
      content: ['Ask participants to write one concrete behavior change they’ll try', 'Share in pairs'],
    },
    {
      title: 'Slide 10 (Next Steps)',
      content: ['Explain how the quiz works, how HR tracks it, certificate process', 'Q&A'],
    },
    { title: 'Appendix / Handouts', content: ['Checklist: Before PCP meeting', 'Checklist: After PCP meeting / embedding goals', 'Example progress note templates'] },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: QuestionType.ShortAnswer,
    text: 'What is the main purpose of a Person-Centered Plan?',
    correctAnswer: ['goal', 'preference', 'choice', 'guide', 'individual', 'support'],
  },
  {
    id: 2,
    type: QuestionType.MultipleChoice,
    text: 'How often must a PCP be reviewed under Maine OADS?',
    options: ['Every 6 months', 'Annually', 'Once every two years', 'Only when something changes'],
    correctAnswer: 'Annually',
  },
  {
    id: 3,
    type: QuestionType.MultipleChoice,
    text: 'Who leads the PCP meeting?',
    options: ['DSP', 'Case Manager', 'Resident (supported)', 'MAC Administrator'],
    correctAnswer: 'Resident (supported)',
  },
  {
    id: 4,
    type: QuestionType.ShortAnswer,
    text: 'Name one DSP responsibility *before* a PCP meeting.',
    correctAnswer: ['review', 'talk', 'prepare', 'gather', 'update'],
  },
  {
    id: 5,
    type: QuestionType.ShortAnswer,
    text: 'Name one DSP responsibility *during* the PCP meeting.',
    correctAnswer: ['listen', 'support', 'document', 'clarify', 'question'],
  },
  {
    id: 6,
    type: QuestionType.ShortAnswer,
    text: 'Name one DSP responsibility *after* the PCP meeting.',
    correctAnswer: ['integrate', 'update', 'communicate', 'goal'],
  },
  {
    id: 7,
    type: QuestionType.TrueFalse,
    text: 'As DSPs, we should make choices for the person if we believe it’s safer.',
    options: ['True', 'False'],
    correctAnswer: 'False',
  },
  {
    id: 8,
    type: QuestionType.MultipleChoice,
    text: 'Which of the following is a good progress note?',
    options: [
      '“Sarah was cooperative all day.”',
      '“Sarah helped fold towels for 15 minutes with minimal prompting.”',
      '“Sarah seemed fine.”',
      '“Sarah ate lunch.”',
    ],
    correctAnswer: '“Sarah helped fold towels for 15 minutes with minimal prompting.”',
  },
  {
    id: 9,
    type: QuestionType.ShortAnswer,
    text: 'In your own words, what does “person-centered” mean?',
    correctAnswer: ['person', 'individual', 'choice', 'lead', 'voice', 'dignity'],
  },
  {
    id: 10,
    type: QuestionType.Reflection,
    text: 'One thing I will do differently in my job as a DSP (after this training):',
  },
];
