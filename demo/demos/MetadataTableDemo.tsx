import { MetadataTable, Stack, Badge } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'items', type: 'Array<{ label: string; value: ReactNode }>', required: true, description: 'Label/value pairs to display.' },
  { name: 'title', type: 'string', description: 'Optional section title rendered above the list.' },
];

export function MetadataTableDemo(): React.JSX.Element {
  return (
    <DocBlock props={props}>
      <PropDemo name="items" description="An array of label/value pairs. Values can be any ReactNode, including Badges or other components.">
        <MetadataTable
          items={[
            { label: 'Name', value: 'Ada Lovelace' },
            { label: 'Email', value: 'ada@example.com' },
            { label: 'Role', value: <Badge variant="info">Admin</Badge> },
            { label: 'Joined', value: 'January 12, 2024' },
            { label: 'Status', value: <Badge variant="success">Active</Badge> },
          ]}
        />
      </PropDemo>

      <PropDemo name="title" description="An optional heading rendered above the metadata list.">
        <Stack gap="lg">
          <MetadataTable
            title="User Profile"
            items={[
              { label: 'Name', value: 'Ada Lovelace' },
              { label: 'Email', value: 'ada@example.com' },
              { label: 'Role', value: <Badge variant="info">Admin</Badge> },
            ]}
          />
          <MetadataTable
            items={[
              { label: 'Version', value: 'v0.2.12' },
              { label: 'License', value: 'MIT' },
              { label: 'Runtime', value: 'Bun 1.2' },
            ]}
          />
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
