export type Project = {
  name: string;
  description: string;
  version: string;
  startWith: number;
  assets: Array<{
    elapsedMs: number;
    durationMs: number;
    analysis: {
      title: string;
      tags: string[];
      description: string;
    };
  }>;
};
