const USERNAME = 'rairulyle';
const REVALIDATE_SECONDS = 3600;
const USER_AGENT = 'rairulyle.me portfolio';

export type GithubStats = {
  /** Contributions over the last year, as shown on the GitHub profile. */
  contributions: number | null;
  /** ISO timestamp of the most recent public push. */
  lastCommitAt: string | null;
};

const fetchContributions = async (): Promise<number | null> => {
  try {
    const res = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { 'user-agent': USER_AGENT },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/([\d,]+)\s+contributions?\s+in the last year/i);
    return match ? Number(match[1].replaceAll(',', '')) : null;
  } catch {
    return null;
  }
};

const fetchLastCommitAt = async (): Promise<string | null> => {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=50`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { accept: 'application/vnd.github+json', 'user-agent': USER_AGENT },
    });
    if (!res.ok) return null;
    const events: { type: string; created_at: string }[] = await res.json();
    return events.find((event) => event.type === 'PushEvent')?.created_at ?? null;
  } catch {
    return null;
  }
};

export const getGithubStats = async (): Promise<GithubStats> => {
  const [contributions, lastCommitAt] = await Promise.all([fetchContributions(), fetchLastCommitAt()]);
  return { contributions, lastCommitAt };
};

export const timeAgo = (iso: string): string => {
  const hours = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 3_600_000));
  if (hours < 1) return '<1h';
  if (hours < 48) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
};
