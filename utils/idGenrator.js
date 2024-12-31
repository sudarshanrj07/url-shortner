import crypto from "crypto";

const charSequence =
	"8ckGxydi-s7eWMzmgUjDoFIv3q1Ql0anSOp5XLK_VYuJ9wCtfNT2bArEZP6h4BHR";

function encodeShortId(num) {
	let encoded = "";
	while (num > 0) {
		encoded = charSequence[num % 64] + encoded;

		num = Math.floor(num / 64);
	}
	return encoded;
}

export function genrateShortId() {
	const randomBytes = crypto.randomBytes(4); // 4 bytes = 32 bits
	const randomNumber = randomBytes.readUIntBE(0, 4); // Convert 4 bytes to a number (32 bits)

	let shortId = encodeShortId(randomNumber);

	while (shortId.length < 8) {
		shortId += charSequence[Math.floor(Math.random() * charSequence.length)];
	}

	return shortId;
}
