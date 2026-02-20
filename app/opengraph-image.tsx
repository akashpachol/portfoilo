import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akash P — Frontend Architect & Creative Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                    backgroundImage:
                        "radial-gradient(circle at 25% 25%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0c0a3e 0%, transparent 50%)",
                }}
            >
                {/* Top Border Accent */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)",
                    }}
                />

                {/* Main Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: "#ffffff",
                            letterSpacing: "-4px",
                            lineHeight: 1,
                        }}
                    >
                        Akash P
                    </div>

                    <div
                        style={{
                            fontSize: 28,
                            color: "#a1a1aa",
                            letterSpacing: "6px",
                            textTransform: "uppercase" as const,
                        }}
                    >
                        Frontend Architect
                    </div>

                    <div
                        style={{
                            fontSize: 18,
                            color: "#71717a",
                            marginTop: "8px",
                            maxWidth: "600px",
                            textAlign: "center" as const,
                            lineHeight: 1.6,
                        }}
                    >
                        Next.js · React · TypeScript · Creative Development
                    </div>
                </div>

                {/* Bottom URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "32px",
                        fontSize: 16,
                        color: "#52525b",
                        letterSpacing: "2px",
                    }}
                >
                    akashp.dev
                </div>
            </div>
        ),
        { ...size }
    );
}
