import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { render } from '@testing-library/react';
import { Text } from './Text';

// Mock @4lt7ab/core so every semantic token resolves to a predictable string.
vi.mock('@4lt7ab/core', () => ({
  semantic: new Proxy({}, { get: (_t, prop) => `var(--mock-${String(prop)})` }),
}));

describe('Text — element shape', () => {
  it('renders a <span> by default', () => {
    const { container } = render(<Text>hello</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('SPAN');
    expect(el.textContent).toBe('hello');
  });

  it('renders a <p> when as="p"', () => {
    const { container } = render(<Text as="p">paragraph</Text>);
    expect((container.firstChild as HTMLElement).tagName).toBe('P');
  });

  it('renders a <div> when as="div"', () => {
    const { container } = render(<Text as="div">block</Text>);
    expect((container.firstChild as HTMLElement).tagName).toBe('DIV');
  });

  it('forwards refs to the underlying element', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Text ref={ref}>x</Text>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it('forwards id and data-testid', () => {
    const { container } = render(
      <Text id="label-1" data-testid="greet">
        hi
      </Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.id).toBe('label-1');
    expect(el.getAttribute('data-testid')).toBe('greet');
  });

  it('does not accept or apply className', () => {
    // Passing className would be a TS error; verify the DOM never carries one.
    const { container } = render(<Text>plain</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toBe('');
  });
});

describe('Text — size maps to font-size tokens', () => {
  const cases: Array<[string, string]> = [
    ['xs', 'var(--mock-fontSizeXs)'],
    ['sm', 'var(--mock-fontSizeSm)'],
    ['md', 'var(--mock-fontSizeBase)'],
    ['lg', 'var(--mock-fontSizeLg)'],
    ['xl', 'var(--mock-fontSizeXl)'],
  ];

  it.each(cases)('size="%s" → %s', (size, expected) => {
    const { container } = render(
      <Text size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>t</Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.fontSize).toBe(expected);
  });
});

describe('Text — weight maps to font-weight tokens', () => {
  const cases: Array<[string, string]> = [
    ['normal', 'var(--mock-fontWeightNormal)'],
    ['medium', 'var(--mock-fontWeightMedium)'],
    ['semibold', 'var(--mock-fontWeightSemibold)'],
    ['bold', 'var(--mock-fontWeightBold)'],
  ];

  it.each(cases)('weight="%s" → %s', (weight, expected) => {
    const { container } = render(
      <Text weight={weight as 'normal' | 'medium' | 'semibold' | 'bold'}>t</Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.fontWeight).toBe(expected);
  });
});

describe('Text — tone maps to color tokens', () => {
  const cases: Array<[string, string]> = [
    ['default', 'var(--mock-colorText)'],
    ['muted', 'var(--mock-colorTextMuted)'],
    ['secondary', 'var(--mock-colorTextSecondary)'],
    ['inverse', 'var(--mock-colorTextInverse)'],
    ['link', 'var(--mock-colorTextLink)'],
    ['success', 'var(--mock-colorSuccess)'],
    ['warning', 'var(--mock-colorWarning)'],
    ['error', 'var(--mock-colorError)'],
  ];

  it.each(cases)('tone="%s" → %s', (tone, expected) => {
    const { container } = render(
      <Text
        tone={
          tone as
            | 'default'
            | 'muted'
            | 'secondary'
            | 'inverse'
            | 'link'
            | 'success'
            | 'warning'
            | 'error'
        }
      >
        t
      </Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.color).toBe(expected);
  });
});

describe('Text — family maps to font-family tokens', () => {
  const cases: Array<[string, string]> = [
    ['sans', 'var(--mock-fontSans)'],
    ['serif', 'var(--mock-fontSerif)'],
    ['mono', 'var(--mock-fontMono)'],
  ];

  it.each(cases)('family="%s" → %s', (family, expected) => {
    const { container } = render(
      <Text family={family as 'sans' | 'serif' | 'mono'}>t</Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.fontFamily).toBe(expected);
  });
});

describe('Text — align and truncate', () => {
  it('applies textAlign when align is set', () => {
    const { container } = render(<Text align="center">c</Text>);
    expect((container.firstChild as HTMLElement).style.textAlign).toBe('center');
  });

  it('omits textAlign when align is unset', () => {
    const { container } = render(<Text>x</Text>);
    expect((container.firstChild as HTMLElement).style.textAlign).toBe('');
  });

  it('applies truncate styles when truncate is true', () => {
    const { container } = render(<Text truncate>long copy here</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.whiteSpace).toBe('nowrap');
    expect(el.style.overflow).toBe('hidden');
    expect(el.style.textOverflow).toBe('ellipsis');
  });

  it('omits truncate styles by default', () => {
    const { container } = render(<Text>x</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.whiteSpace).toBe('');
    expect(el.style.textOverflow).toBe('');
  });
});

describe('Text — default prop combinations', () => {
  it('applies all defaults (size=md, weight=normal, tone=default, family=sans)', () => {
    const { container } = render(<Text>default</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.fontSize).toBe('var(--mock-fontSizeBase)');
    expect(el.style.fontWeight).toBe('var(--mock-fontWeightNormal)');
    expect(el.style.color).toBe('var(--mock-colorText)');
    expect(el.style.fontFamily).toBe('var(--mock-fontSans)');
  });

  it('combines tone + size orthogonally', () => {
    const { container } = render(
      <Text tone="muted" size="xs">
        caption
      </Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.color).toBe('var(--mock-colorTextMuted)');
    expect(el.style.fontSize).toBe('var(--mock-fontSizeXs)');
  });

  it('combines family + weight orthogonally', () => {
    const { container } = render(
      <Text family="mono" weight="bold">
        42
      </Text>,
    );
    const el = container.firstChild as HTMLElement;
    expect(el.style.fontFamily).toBe('var(--mock-fontMono)');
    expect(el.style.fontWeight).toBe('var(--mock-fontWeightBold)');
  });
});
