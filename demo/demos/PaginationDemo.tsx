import { useState } from 'react';
import { Pagination, Stack } from '@4lt7ab/ui';
import { DocBlock, PropDemo, type PropMeta } from '../components/DocBlock';

const props: PropMeta[] = [
  { name: 'page', type: 'number', required: true, description: 'Current page number (1-based).' },
  { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages.' },
  { name: 'total', type: 'number', required: true, description: 'Total number of items across all pages (shown in the indicator text).' },
  { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Called when the user navigates to a different page.' },
  { name: 'labels', type: 'PaginationLabels', description: 'Custom text labels for the Previous/Next buttons and page indicator.' },
];

export function PaginationDemo(): React.JSX.Element {
  const [page, setPage] = useState(3);

  return (
    <DocBlock props={props}>
      <PropDemo name="page + onPageChange" description="Interactive pagination. Previous and Next buttons disable at the boundaries.">
        <Pagination
          page={page}
          totalPages={10}
          total={97}
          onPageChange={setPage}
        />
      </PropDemo>

      <PropDemo name="Boundary states" description="Previous is disabled on the first page; Next is disabled on the last page.">
        <Stack gap="md">
          <Pagination
            page={1}
            totalPages={5}
            total={48}
            onPageChange={() => {}}
          />
          <Pagination
            page={5}
            totalPages={5}
            total={48}
            onPageChange={() => {}}
          />
        </Stack>
      </PropDemo>
    </DocBlock>
  );
}
