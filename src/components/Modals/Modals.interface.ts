export interface ModalsProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}