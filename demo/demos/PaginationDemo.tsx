import { useState } from 'react';
import { Pagination, Stack } from '../../src';

export function PaginationDemo(): React.JSX.Element {
  const [page, setPage] = useState(3);

  return (
    <Stack gap="xl">
      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Basic pagination</h3>
        <Pagination
          page={page}
          totalPages={10}
          total={97}
          onPageChange={setPage}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>First page (Previous disabled)</h3>
        <Pagination
          page={1}
          totalPages={5}
          total={48}
          onPageChange={() => {}}
        />
      </Stack>

      <Stack gap="sm">
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Last page (Next disabled)</h3>
        <Pagination
          page={5}
          totalPages={5}
          total={48}
          onPageChange={() => {}}
        />
      </Stack>
    </Stack>
  );
}
