import { render, screen } from '@testing-library/react';
import Task from './Task';

test('renders task title', () => {
    render(<Task task={{id: '1', title: 'Test task', state: 'TASK_INBOX'}} />);
    const inputElementTitle = screen.getByDisplayValue('Test task');
    expect(inputElementTitle).toBeInTheDocument();
  });