type Level = "tooWeak" | "weak" | "medium" | "strong";

interface WrapperMarkerLevelProps {
  strength?: Level;
}

interface StrengthProps extends WrapperMarkerLevelProps {}
