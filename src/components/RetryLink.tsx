export default function RetryLink({ onClick }: { onClick: () => void }) {
  return <a onClick={onClick} href="#" style={{ color: "var(--primary-color)" }}>Retry</a>
}