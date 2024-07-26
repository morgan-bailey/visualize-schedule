import Schedule from '../components/Schedule/Schedule';
import '../styles/global.scss';
export default {
  title: 'Schedule',
  component: Schedule,
};

const data = [
  { startTime: '8:00', endTime: '9:00', day: '1' },
  { startTime: '7:00', endTime: '7:30', day: '2' },
  { startTime: '10:20', endTime: '10:50', day: '3' },
  { startTime: '8:15', endTime: '10:30', day: '4' },
  { startTime: '8:00', endTime: '8:30', day: '5' },
];

export const Example = {
  args: {
    data,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
