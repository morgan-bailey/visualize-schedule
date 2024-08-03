import Schedule from '../components/Schedule/';
import '../styles/global.scss';
export default {
  title: 'Schedule',
  component: Schedule,
};

const colorPalette = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];

const data = [
  { startTime: '8:00', endTime: '10:00', day: '1', label: 'Amy', color: colorPalette[0] },
  { startTime: '7:00', endTime: '7:30', day: '2', label: 'Becky', color: colorPalette[1] },
  { startTime: '10:20', endTime: '10:50', day: '3', label: 'Cathy', color: colorPalette[2] },
  { startTime: '8:15', endTime: '10:30', day: '4', label: 'Dana', color: colorPalette[3] },
  { startTime: '8:00', endTime: '8:30', day: '5', label: 'Emily', color: colorPalette[4] },
];

export const Example = {
  args: {
    data,
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', height: '10rem', width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};
