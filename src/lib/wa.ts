// ponytail: satu-satunya sumber nomor WA; semua CTA import waLink dari sini
export const WA_NUMBER = '6285188502894';

export const waLink = (text: string) =>
	`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Channel bukti pesanan, dipakai di section testimoni.
export const WA_CHANNEL_BUKTI = 'https://whatsapp.com/channel/0029Vb8l763BA1eup17LVv2o';

// Channel kontak umum, dipakai di footer.
export const WA_CHANNEL = 'https://whatsapp.com/channel/0029VbDSLNSBPzjZY8bOTu19';
