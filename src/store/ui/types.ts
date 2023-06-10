export interface UiStateStructure {
  isLoading: boolean;
  isError: boolean;
  message: string;
  showFeedback: boolean;
}

export interface FeedbackPayloadStructure {
  message: string;
  showFeedback: boolean;
  isError: boolean;
}
