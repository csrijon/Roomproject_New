import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const PlanCard = ({ item }) => {
    return (
        <>
            <View
                style={[
                    styles.card,
                    item.recommended && styles.recommendedCard,
                ]}
            >
                {/* Recommended Badge */}
                {item.recommended && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Recommended</Text>
                    </View>
                )}

                {/* Title */}
                <Text style={styles.title}>{item.name}</Text>

                {/* Price */}
                <Text style={styles.price}>${item.price}
                    <Text style={styles.per}>/{item.per}</Text>
                </Text>

                {/* Yearly price */}
                {item.yearly && <Text style={styles.yearly}>{item.yearly}</Text>}

                {/* Features */}
                {item.features.map((feature, index) => (
                    <View style={styles.featureRow} key={index}>
                        <View style={styles.checkCircle} ><Text style={styles.check}>✓</Text></View>
                        <Text style={styles.featureText}>{feature}</Text>
                    </View>
                ))}

                {/* Button */}
                <TouchableOpacity
                    style={[
                        styles.button,
                        item.recommended && styles.recommendedButton,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            item.recommended && { color: "white" },
                        ]}
                    >
                        {item.buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default PlanCard

const styles = StyleSheet.create({
    card: {
        width: 230,
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        marginRight: 15,
        borderWidth: 1.2,
        borderColor: "#e5e5e5",
    },

    recommendedCard: {
        borderColor: "#34d3c0",
        borderWidth: 2.5,
    },

    badge: {
        backgroundColor: "#34d3c0",
        paddingVertical: 4,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        borderRadius: 12,
        marginBottom: 10,
    },

    badgeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 5,
    },

    price: {
        fontSize: 26,
        fontWeight: "700",
        color: "#111",
    },

    per: {
        fontSize: 16,
        fontWeight: "400",
        color: "#444",
    },

    yearly: {
        fontSize: 13,
        color: "#444",
        marginBottom: 14,
    },

    featureRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },
    checkCircle: {
        // width: 22,
        // height: 22,
        padding: 5,
        borderRadius: 91,
        borderWidth: 1,
        borderColor: "#34d3c0",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
    check: {
        fontSize: 16,
        color: "#34d3c0",
        // marginRight: 8,
        justifyContent: "center"
    },

    featureText: {
        fontSize: 14,
        color: "#444",
    },

    button: {
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#dff9f5",
    },

    recommendedButton: {
        backgroundColor: "#34d3c0",
    },

    buttonText: {
        color: "#009e87",
        fontSize: 16,
        fontWeight: "600",
    },
})