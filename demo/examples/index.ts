import { SettingsPage } from './SettingsPage';
import { TaskDashboard } from './TaskDashboard';
import { DeleteFlow } from './DeleteFlow';
import { BlogPost } from './BlogPost';
import type { DemoEntry } from '../demos';

export const examples: DemoEntry[] = [
  { name: 'Blog Post', category: 'Examples', source: 'content', component: BlogPost },
  { name: 'Settings Page', category: 'Examples', source: 'ui', component: SettingsPage },
  { name: 'Task Dashboard', category: 'Examples', source: 'ui', component: TaskDashboard },
  { name: 'Delete Flow', category: 'Examples', source: 'ui', component: DeleteFlow },
];
