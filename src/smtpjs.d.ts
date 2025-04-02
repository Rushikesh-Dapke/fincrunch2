declare const Email: {
  send: (options: {
    SecureToken: string;
    To: string;
    From: string;
    Subject: string;
    Body: string;
  }) => Promise<string>;
};
